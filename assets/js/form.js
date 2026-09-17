// Submits the contact form to Netlify Forms via fetch so the visitor stays on the page.
// Single responsibility: form submission + feedback state only.
export function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  if (!form || !feedback) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;

    try {
      const formData = new FormData(form);
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      feedback.dataset.state = "success";
      feedback.querySelector("[data-feedback-title]").textContent = "¡Mensaje enviado con éxito!";
      feedback.querySelector("[data-feedback-body]").textContent =
        "El Lic. Javier Becco recibió su consulta y se comunicará a la brevedad dentro del horario laboral.";
      feedback.classList.remove("hidden");
      form.reset();
    } catch (error) {
      feedback.dataset.state = "error";
      feedback.querySelector("[data-feedback-title]").textContent = "No se pudo enviar el mensaje";
      feedback.querySelector("[data-feedback-body]").textContent =
        "Por favor intente nuevamente o escriba directamente por WhatsApp o correo electrónico.";
      feedback.classList.remove("hidden");
    } finally {
      submitButton.disabled = false;
      feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
}
