# Svelte AdminLTE

Base de integración de AdminLTE con SvelteKit.

## Objetivo

El propósito de este proyecto es implementar una estructura base de AdminLTE utilizando SvelteKit, sin necesidad de migrar o integrar todos los componentes disponibles en AdminLTE.

La finalidad es disponer de una plantilla administrativa funcional y reutilizable que sirva como punto de partida para futuros proyectos desarrollados en Svelte.

## Alcance inicial

La primera versión debe contemplar principalmente:

- Layout principal del sistema.
- Header / Navbar.
- Sidebar.
- Footer.
- Área dinámica de contenido.
- Menú lateral con navegación mediante SvelteKit.
- Soporte para submenús.
- Iconografía base.
- Estilos principales de AdminLTE.
- Estructura responsive.
- Integración de Bootstrap y dependencias necesarias.
- Separación de componentes reutilizables.

No se requiere implementar inicialmente todos los plugins, widgets, páginas de ejemplo o componentes disponibles en AdminLTE.

## Estructura propuesta

src/
├── lib/
│ ├── assets/
│ ├── components/
│ │ └── layouts/
│ │ ├── Header.svelte
│ │ ├── Sidebar.svelte
│ │ └── Footer.svelte
│ └── index.js
│
├── routes/
│ ├── (admin)/
│ │ ├── +layout.svelte
│ │ ├── +page.svelte
│ │ └── configuracion/
│ │ └── +page.svelte
│ │
│ └── (auth)/
│ └── login/
│ └── +page.svelte
│
└── app.html
