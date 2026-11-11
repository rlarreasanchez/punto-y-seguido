# Punto y seguido · Jornadas y concurso literario

Sitio web de **Punto y seguido**, unas jornadas y concurso literario. Es la PEC 2 de la asignatura Herramientas HTML y CSS II del [Máster Universitario en Desarrollo de Sitios y Aplicaciones Web](https://estudis.uoc.edu/es/masters-universitarios/desarrollo-sitios-aplicaciones-web/presentacion) de la [UOC](https://www.uoc.edu).

El proyecto parte del [UOC Boilerplate](https://github.com/uoc-advanced-html-css/uoc-boilerplate) (Parcel + Sass) y añade Bootstrap 5 organizado en capas de cascada para evitar conflictos de especificidad con los estilos propios.

## Páginas

| Página | Archivo | Contenido |
| --- | --- | --- |
| Portada | `src/index.html` | Presentación de las jornadas y el concurso. |
| Ponentes | `src/ponentes.html` | Listado de las personas invitadas. |
| Artículo | `src/articulo.html` | «Lo que viene después del punto», con pasos, citas y componentes centrados. |
| Participa | `src/participa.html` | Programa por días en pestañas, bases del concurso en un acordeón y formulario de inscripción. |

## Características

- **Bootstrap 5** (pestañas, acordeón, validación de formularios) importado en capas `@layer` junto a los componentes y el artículo.
- **Sass/SCSS** con arquitectura por carpetas: `abstracts`, `base`, `components` y `layouts`.
- **Formulario de inscripción** validado con los estilos de Bootstrap y enviado a [Netlify Forms](https://docs.netlify.com/forms/setup/) sin salir de la página (`src/assets/scripts/signup.js`). Sin JavaScript, el formulario se envía de la forma habitual.
- **Parciales HTML** (`src/views/`) para cabecera, pie y logotipo, con `posthtml-include`.
- Tipografías autoalojadas con Fontsource (Young Serif y Literata) e iconos de Font Awesome.
- Transpilación y minificación de CSS, HTML y JS con Parcel, y transformación de imágenes con `sharp`.
- Linting de estilos con Stylelint.

## Requisitos

[Node.js](https://nodejs.org/) >= 18 (el archivo `.nvmrc` indica la versión usada en desarrollo).

## Puesta en marcha

```bash
git clone https://github.com/rlarreasanchez/punto-y-seguido.git
cd punto-y-seguido
npm install
npm run dev
```

El servidor de desarrollo se abre en <http://localhost:8123> con recarga automática.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Limpia cachés y arranca el servidor de desarrollo con recarga en vivo. |
| `npm run build` | Genera la versión optimizada en `dist/`, lista para publicar. |
| `npm run clean` | Elimina `dist/` y las carpetas de caché. |
| `npm run lint:css` | Revisa los archivos `.scss` con Stylelint. |
| `npm test` | Muestra un mensaje si el entorno funciona correctamente. |

## Estructura

```text
src/
├── index.html · ponentes.html · articulo.html · participa.html
├── views/                 # Parciales HTML (header, footer, logo)
└── assets/
    ├── images/
    ├── scripts/           # main.js · signup.js
    └── styles/
        ├── main.scss      # Punto de entrada
        ├── base/          # Fuentes y estilos de página
        ├── components/    # Cabecera, pie, programa, sesión, ponentes, inscripción…
        └── layouts/       # Portada, ponentes, artículo y participa
```

Todo el contenido vive en `src/`; `dist/` se genera al compilar y no se versiona.

## Despliegue

Ejecuta `npm run build` y publica el contenido de `dist/`. El formulario de inscripción está pensado para [Netlify](https://www.netlify.com), que detecta el formulario en el HTML compilado. Como comando de build usa `npm run build` y como directorio de publicación `dist`.

## Créditos y licencia

Proyecto desarrollado por Rafael Larrea a partir del UOC Boilerplate de Jordi Tarrida, publicado bajo licencia MIT. Este proyecto se distribuye también bajo licencia MIT (ver [LICENSE](LICENSE)).
