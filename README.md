# Svelte AdminLTE

AdminLTE base implementation for SvelteKit.

The goal of this project is to provide a reusable and modular
AdminLTE structure adapted to SvelteKit.

This project does not aim to port the entire AdminLTE ecosystem.
Instead, components and functionality will be progressively adapted
using native Svelte patterns whenever possible.

## Goals

- Provide an AdminLTE layout for SvelteKit
- Create reusable Svelte components
- Avoid unnecessary dependency on legacy JavaScript
- Support SvelteKit routing
- Provide responsive admin layouts
- Keep the architecture simple and maintainable
- Allow community contributions

## Current Components

- [x] Header
- [x] Sidebar
- [x] Footer
- [ ] Sidebar menu
- [ ] Treeview menu
- [ ] Dashboard
- [ ] Cards
- [ ] Forms
- [ ] Tables
- [ ] Modals
- [ ] Authentication layout

## Project Structure

src/
├── lib/
│ └── components/
│ └── layouts/
│ ├── Header.svelte
│ ├── Sidebar.svelte
│ └── Footer.svelte
│
└── routes/
├── (admin)/
│ └── +layout.svelte
│
└── (auth)/

## Development

Install dependencies:

npm install

Start development server:

npm run dev

## Contributions

Contributions are welcome.

Before submitting a pull request, please read CONTRIBUTING.md.

## License

See LICENSE.
