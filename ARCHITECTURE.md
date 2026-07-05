# Architecture Overview

This project is split into two independent codebases that communicate over HTTP:

- **Frontend** — a React (Vite + Tailwind CSS v4) single-page portfolio site
- **Backend** — a Laravel API whose sole responsibility is receiving contact-form
  submissions, validating them, and sending email

They are not a monorepo and do not share code — the only contract between them is
a single HTTP endpoint (`POST /api/contact`).

```
React (localhost:5173)
      │  fetch POST, JSON body
      ▼
Laravel (127.0.0.1:8000) — CORS allows the React origin
      │  validates input
      │  Mail::send() ×2
      ▼
SMTP (Gmail) ──► your inbox
             └─► visitor's inbox (confirmation)
```

---

## Frontend

**Stack:** React 19, Vite, Tailwind CSS v4, Framer Motion, `react-icons`, `lucide-react`.

**Structure:**

```
src/
  main.jsx                    Mounts <App /> into #root
  App.jsx                     Composes all sections, wraps in an ErrorBoundary
  index.css                   Tailwind v4 setup + design tokens (colors, fonts, shadows)
  data/
    profile.js                 Name, contact info, social links
    stack.js                    Tech stack list (icon + brand color per entry)
    expertise.js                 Skill category cards
    projects.js                   Portfolio project entries
  hooks/
    useActiveSection.jsx        Scroll-spy hook used by the navbar
  Components/
    Navbar.jsx                  Fixed nav bar, active-link highlighting
    Hero.jsx                    Landing/intro section
    About.jsx                    Bio + tech stack grid
    Portfolio.jsx                  Project cards
    Expertise.jsx                   Skill category grid
    Contact.jsx                      Contact form, wired to the Laravel API
    SideBar.jsx                       Fixed vertical icon rail (LinkedIn/GitHub/Email)
    Footer.jsx                         Copyright footer
    ThemeToggle.jsx                     Light/dark mode toggle
    SectionWrapper.jsx                   Shared layout + scroll-in animation wrapper
```

**Design system:** All colors, fonts, radii, and shadows are defined once as CSS
custom properties in `index.css` (`:root` for light mode, `.dark` for dark mode),
then registered inside a Tailwind v4 `@theme` block so utility classes like
`bg-primary`, `text-foreground`, `font-display`, and `shadow-glow` resolve to
those tokens automatically. `@custom-variant dark` makes `dark:`-prefixed
classes respond to `ThemeToggle.jsx`'s manual class toggle rather than only
the OS-level color scheme preference.

**Contact form flow (`Contact.jsx`):**

1. Controlled inputs for `name`, `email`, `subject`, `message`, plus a hidden
   `company` honeypot field for basic spam deterrence.
2. A `status` state machine: `idle → loading → success | error`.
3. On submit, `fetch()`s a `POST` to `${VITE_API_URL}/api/contact` with a JSON
   body.
4. Laravel's response is parsed: a `422` shows the first validation error;
   any other non-OK status shows a generic error; success shows a confirmation
   message.

**Environment:** `VITE_API_URL` (in the frontend project's `.env`) points at
the Laravel API base URL, e.g. `http://127.0.0.1:8000`.

---

## Backend

**Stack:** Laravel 11+, PHP, SMTP mail delivery (via Gmail App Password in
development).

**Structure:**

```
routes/api.php
  GET  /api/ping        Connectivity check
  POST /api/contact     Contact form submission

app/Http/Controllers/
  ContactController.php  Validates input, orchestrates sending both emails

app/Mail/
  ContactMessage.php      Notification email → site owner
  ContactAutoReply.php     Confirmation email → the visitor

resources/views/emails/
  contact.blade.php          Notification email template
  contact-autoreply.blade.php Confirmation email template

config/cors.php            Allows the Vite dev server origin to call the API
.env                        MAIL_* SMTP credentials, APP_KEY, etc.
```

**Request flow (`ContactController::send()`):**

1. Validate `name`, `email`, `subject`, `message` (required, with length
   limits). Invalid input returns `422` with a Laravel-standard `errors`
   object.
2. Send the **owner notification** email via `Mail::to(...)->send(new
   ContactMessage(...))`. This is treated as critical — if it throws, the
   request returns `500` and nothing further happens.
3. Send the **visitor auto-reply** via `Mail::to($validated['email'])->send(new
   ContactAutoReply(...))`. This is best-effort — a failure here is logged
   with `Log::warning()` but does not fail the overall request, since the
   owner was already successfully notified.
4. Return `200` with a success message.

**Mailable classes** (`ContactMessage`, `ContactAutoReply`) each define:
- an `envelope()` — subject line, and for the notification, a `replyTo`
  pointing at the visitor's address so replying from your inbox goes directly
  to them
- a `content()` — which Blade view renders the body, and what data it
  receives

**CORS:** `config/cors.php` restricts allowed origins to the frontend's dev
URL(s) (`http://localhost:5173`, `http://127.0.0.1:5173`). Add your production
frontend domain here before deploying.

---

## Local development

Two servers run side by side:

```bash
# Terminal 1 — backend
cd backend
php artisan serve            # http://127.0.0.1:8000

# Terminal 2 — frontend
cd Portfolio
npm run dev                   # http://localhost:5173
```

## Known follow-ups / not yet implemented

- The `company` honeypot field on the frontend is not currently checked
  server-side — it's inert until validation/anti-spam logic is added to
  `ContactController`.
- A Node.js/Express + Nodemailer microservice was scoped as an alternative
  mail-delivery path (Laravel delegating actual SMTP sending to Node), but was
  not adopted — Laravel's own `Mail` facade handles delivery directly and is
  sufficient for current needs.
