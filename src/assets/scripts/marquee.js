/**
 * Botón de pausa de la cinta de texto de la portada: un contenido que se mueve
 * solo durante más de cinco segundos debe poder detenerse (WCAG 2.2.2)
 */
export function initMarquee() {
  const marquee = document.querySelector(".marquee");
  if (!marquee) return;

  const button = marquee.querySelector(".marquee__button");
  const icon = button.querySelector("i");

  button.addEventListener("click", () => {
    const paused = marquee.classList.toggle("marquee--paused");
    button.setAttribute("aria-pressed", String(paused));
    button.setAttribute(
      "aria-label",
      paused ? "Reanudar la cinta de texto" : "Pausar la cinta de texto",
    );
    icon.classList.toggle("fa-pause", !paused);
    icon.classList.toggle("fa-play", paused);
  });
}
