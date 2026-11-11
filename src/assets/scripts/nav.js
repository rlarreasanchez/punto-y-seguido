/**
 * Marca en la navegación la página actual. Cada página indica cuál es con
 * data-page en el body, así funciona igual con o sin la extensión .html en la URL
 */
export function initNav() {
  const { page } = document.body.dataset;
  const link = document.querySelector(`.header__link[data-nav="${page}"]`);
  if (!link) return;

  link.classList.add("header__link--current");
  link.setAttribute("aria-current", "page");
}
