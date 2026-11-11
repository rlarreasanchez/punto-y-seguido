/**
 * Valida el formulario de inscripción con los estilos de Bootstrap y lo envía
 * a Netlify Forms sin salir de la página. Sin JavaScript, el formulario se
 * envía de la forma habitual.
 */

const MESSAGES = {
  success: "Inscripción recibida. Te escribiremos para confirmar tu plaza.",
  error:
    "No hemos podido enviar la inscripción. Revisa tu conexión e inténtalo de nuevo o escríbenos a hola@puntoyseguido.example.",
};

function showResult(alertBox, type) {
  alertBox.className = `alert ${type === "success" ? "alert-success" : "alert-danger"}`;
  alertBox.textContent = MESSAGES[type];
  alertBox.hidden = false;
  alertBox.focus();
}

function syncStoryField(form) {
  const wantsStory = form.elements.modalidad.value === "relato";
  form.elements.relato.required = wantsStory;
}

export function initSignup() {
  const form = document.querySelector(".signup");
  if (!form) return;

  const alertBox = form.querySelector(".signup__result");
  const submit = form.querySelector(".signup__submit");

  form.addEventListener("change", () => syncStoryField(form));

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    syncStoryField(form);
    form.classList.add("was-validated");
    alertBox.hidden = true;

    if (!form.checkValidity()) {
      form.querySelector(":invalid").focus();
      return;
    }

    submit.disabled = true;
    try {
      const response = await fetch("/", {
        method: "POST",
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(`Respuesta ${response.status}`);
      form.reset();
      form.classList.remove("was-validated");
      showResult(alertBox, "success");
    } catch {
      showResult(alertBox, "error");
    } finally {
      submit.disabled = false;
    }
  });
}
