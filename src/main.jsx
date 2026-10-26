import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import AOS from "aos";
import "aos/dist/aos.css";

import App from "./App.jsx";
import "./assets/style/style.css";

AOS.init({
  duration: 800,
  once: true,
  offset: 80,
  easing: "ease-out-cubic"
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);