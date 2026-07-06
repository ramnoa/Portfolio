# Noah Ewalan Logong — Portfolio

A personal portfolio site with a working contact form: a React frontend
(Vite + Tailwind CSS v4 + Framer Motion) paired with a small Laravel API that
validates submissions and emails both the site owner and the visitor a
confirmation.

See [`ARCHITECTURE.md`](./ARCHITECTURE.md) for a full breakdown of how the two
sides are structured and how they talk to each other.

## Project structure

```
Portfolio/          React frontend (Vite)
backend/             Laravel API (contact form + mail)
```

These are two independent projects — no shared dependencies, no monorepo
tooling. They communicate only over HTTP.

---

## Frontend setup

```bash
cd Portfolio
npm install
```

Create a `.env` file in the frontend project root:

```
VITE_API_URL=http://127.0.0.1:8000
```

Run the dev server:

```bash
npm run dev
```

Visits `http://localhost:5173`.

### Frontend structure

```
src/
  App.jsx                  Composes all sections
  index.css                 Tailwind v4 theme + design tokens
  data/                       Content (profile, stack, expertise, projects)
  hooks/useActiveSection.jsx    Scroll-spy for nav highlighting
  Components/
    Navbar, Hero, About, Portfolio,
    Expertise, Contact, SideBar,
    Footer, ThemeToggle, SectionWrapper
```

### Editing content

Update your bio, links, and project list without touching any component code:

- `src/data/profile.js` — name, phone, WhatsApp, social links
- `src/data/stack.js` — tech stack icons/colors
- `src/data/expertise.js` — skill category cards
- `src/data/projects.js` — portfolio project entries

### Theming

Colors, fonts, radii, and shadows are defined once in `src/index.css` as CSS
custom properties (`:root` for light mode, `.dark` for dark mode) and
registered in a Tailwind v4 `@theme` block. Change a color once there and it
propagates everywhere the corresponding utility class (`bg-primary`,
`text-foreground`, etc.) is used.

---

## Backend setup

```bash
cd backend
composer install
php artisan install:api   # if routes/api.php doesn't already exist
php artisan key:generate  # if APP_KEY is empty
```

Add your mail credentials to `backend/.env`:

```
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-16-char-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="your-email@gmail.com"
MAIL_FROM_NAME="Portfolio Contact Form"
```

> Gmail requires an **App Password** (not your normal password), generated at
> [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
> This requires 2-Step Verification to be enabled on the account first.
> App passwords are displayed with spaces (`xxxx xxxx xxxx xxxx`) — remove the
> spaces or wrap the value in quotes in `.env`, since unquoted spaces break
> `.env` parsing.

Run the server:

```bash
php artisan serve
```

Serves the API at `http://127.0.0.1:8000`.

### Backend structure

```
routes/api.php
  GET  /api/ping         Connectivity check
  POST /api/contact      Contact form submission

app/Http/Controllers/ContactController.php
app/Mail/ContactMessage.php        Notification email → you
app/Mail/ContactAutoReply.php       Confirmation email → the visitor
resources/views/emails/*.blade.php   Email templates
config/cors.php                       Allowed frontend origins
```

### CORS

`config/cors.php` only allows requests from `http://localhost:5173` and
`http://127.0.0.1:5173` by default. **Add your production frontend domain to
`allowed_origins` before deploying**, or requests from the live site will be
silently blocked by the browser.

---

## Running both together

```bash
# Terminal 1
cd backend
php artisan serve

# Terminal 2
cd Portfolio
npm run dev
```

Open `http://localhost:5173`, fill out the contact form, and submit. Two
emails should be sent: one to the configured owner address, one confirmation
to whatever address was entered in the form.

---

## Tech stack

**Frontend:** React 19, Vite, Tailwind CSS v4, Framer Motion, react-icons,
lucide-react

**Backend:** Laravel 11+, PHP, SMTP (Gmail in development)

---

## Known limitations

- The contact form's honeypot field (`company`) is present on the frontend
  but not yet validated against on the backend — spam protection is not
  fully enforced.
- Mail is sent synchronously on each request (no queue). For a low-traffic
  personal portfolio this is fine; for higher volume, queuing the Mailables
  (`ShouldQueue`) would avoid blocking the HTTP response on SMTP round-trips.