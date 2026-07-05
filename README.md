# Noah Ewalan Logong — Portfolio (React)

React implementation of the 5-section portfolio site (Home, About, Portfolio, Expertise, Contact), split into one component per section.

## Structure

```
src/
  App.jsx                     # composes all sections + footer
  main.jsx                    # Vite/CRA entry point
  index.css                   # Tailwind + font import
  theme.js                    # shared color tokens
  components/
    Navbar.jsx                # fixed nav, scroll-spy active link
    Hero.jsx                  # landing / intro section
    About.jsx                 # bio + "My Stack" card + CV/Hire CTAs
    Portfolio.jsx             # project cards (Nano Traffic, TradeAI Engine)
    TechnicalExpertise.jsx    # 4 skill-category cards
    Contact.jsx               # call/WhatsApp links + message form
```

## Setup

This assumes a Vite + React + Tailwind project. If starting fresh:

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react
```

Then drop these files into `src/`, and make sure `tailwind.config.js` scans your source:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

Run it:

```bash
npm run dev
```

## Notes

- Update the phone number / WhatsApp link in `Contact.jsx` (`PHONE`, `WHATSAPP_LINK`, `TEL_LINK`).
- The contact form currently logs to console on submit — wire `handleSubmit` in `Contact.jsx` to your email service or backend endpoint.
- Colors and gradient live in `theme.js` if you want to retheme without hunting through each component.
