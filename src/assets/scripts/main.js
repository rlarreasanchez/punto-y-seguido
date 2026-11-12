/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// Solo el plugin de Bootstrap que usa el menú móvil
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/tab";

import { initNav } from "./nav";
import { initSignup } from "./signup";

/**
 * Write any other JavaScript below
 */

document.documentElement.classList.replace("no-js", "js");

initNav();
initSignup();
