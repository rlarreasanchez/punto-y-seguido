/**
 * El punto y los círculos del póster siguen levemente al puntero. Solo con ratón
 * y si no se ha pedido reducir el movimiento.
 */
export function initPoster() {
  const poster = document.querySelector(".poster");
  if (!poster) return;

  const canAnimate = window.matchMedia(
    "(hover: hover) and (prefers-reduced-motion: no-preference)",
  );
  if (!canAnimate.matches) return;

  let frame = 0;

  poster.addEventListener("pointermove", (event) => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const box = poster.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      poster.style.setProperty("--poster-x", x.toFixed(3));
      poster.style.setProperty("--poster-y", y.toFixed(3));
    });
  });

  poster.addEventListener("pointerleave", () => {
    cancelAnimationFrame(frame);
    poster.style.setProperty("--poster-x", "0");
    poster.style.setProperty("--poster-y", "0");
  });
}
