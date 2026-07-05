// Application Entry Point
// Imports global styles and renders the App component into DOM root

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Global styles: Tailwind CSS + custom theme variables
import App from "./App.jsx";

// Mount React app to <div id=\"root\"></div> in index.html
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);