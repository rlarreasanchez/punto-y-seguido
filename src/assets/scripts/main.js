/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import AOS from "aos";

// Solo los plugins de Bootstrap que se usan
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/tab";

import { initNav } from "./nav";
import { initSignup } from "./signup";

/**
 * Write any other JavaScript below
 */

AOS.init({
  once: true,
  duration: 700,
  easing: "ease-out-cubic",
  offset: 60,
  disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
});

initNav();
initSignup();
