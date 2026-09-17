// Composition root: wires up the independent behavior modules. Each module owns one concern.
import { initNav } from "./nav.js";
import { initContactForm } from "./form.js";

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initContactForm();
});
