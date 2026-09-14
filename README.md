# Svelte AdminLTE

Base implementation of **AdminLTE for SvelteKit**.

This project provides a reusable and modular AdminLTE structure adapted to SvelteKit, using native Svelte patterns whenever possible.

The goal is not to port the entire AdminLTE ecosystem, but to progressively provide the essential components needed to build modern administrative applications with SvelteKit.

## Features

* AdminLTE layout adapted to SvelteKit
* Reusable Svelte components
* Responsive administrative interface
* SvelteKit routing
* Bootstrap 5 integration
* AdminLTE 4 integration
* Reusable data table component
* Reusable modal component
* Theme toggle
* User menu
* JSON Server development API
* Minimal dependency approach

## Goals

* Provide a reusable AdminLTE layout for SvelteKit
* Create modular Svelte components
* Use native Svelte features whenever possible
* Avoid unnecessary dependencies and legacy JavaScript
* Support SvelteKit routing
* Provide responsive administrative layouts
* Keep the architecture simple and maintainable
* Provide reusable components for common administrative interfaces
* Allow community contributions

## Current Components

### Layout

* [x] Header
* [x] Sidebar
* [x] Sidebar groups
* [x] Sidebar items
* [x] Footer
* [x] Page layout
* [x] User menu
* [x] Theme toggle

### Shared Components

* [x] Modal
* [x] Notifications
* [x] Datatable
* [ ] Cards
* [ ] Forms
* [ ] Alerts

### Navigation

* [ ] Sidebar menu
* [ ] Treeview menu
* [ ] Breadcrumbs

### Application

* [ ] Dashboard
* [ ] Authentication layout
* [ ] Authentication flow

## Dependencies

The project aims to keep dependencies to a minimum.

Main dependencies:

* **SvelteKit** — application framework
* **Svelte** — UI framework
* **AdminLTE** — administrative interface
* **Bootstrap** — styling and UI utilities
* **Tabulator** — advanced data tables
* **OverlayScrollbars** — custom scrollbars

The project avoids adding libraries when the required functionality can be implemented using native browser APIs or Svelte.

For example:

* HTTP requests → `fetch`
* Application state → Svelte
* Notifications → reusable Svelte component
* Modals → Bootstrap
* Forms → native HTML + Svelte

Libraries are used when they provide significant functionality that would otherwise require implementing and maintaining a complex solution.

## Project Structure

```text
src/
├── lib/
│   ├── components/
│   │   ├── configuracion/
│   │   │   └── ModalSaveUsuario.svelte
│   │   │
│   │   ├── layouts/
│   │   │   ├── Header.svelte
│   │   │   ├── Sidebar.svelte
│   │   │   ├── SidebarGroup.svelte
│   │   │   ├── SidebarItem.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── PageLayout.svelte
│   │   │   ├── ThemeToggle.svelte
│   │   │   └── UserMenu.svelte
│   │   │
│   │   └── shared/
│   │       ├── Datatable.svelte
│   │       └── Modal.svelte
│   │
│   ├── utils/
│   │   ├── API.js
│   │   └── Notificacion.js
│   │
│   └── index.js
│
└── routes/
    ├── (admin)/
    │   ├── +layout.svelte
    │   └── configuracion/
    │       └── usuario/
    │           └── +page.svelte
    │
    ├── (auth)/
    │   ├── +layout.svelte
    │   └── login/
    │       └── +page.svelte
    │
    └── +page.svelte

static/
├── assets/
├── css/
└── data.json
```

## Development

### 1. Install dependencies

Clone the repository and install the dependencies:

```bash
npm install
```

### 2. Start the development API

The project currently uses **JSON Server** as a temporary backend for development and testing.

Open a terminal and navigate to the `static` directory:

```bash
cd static
```

Start JSON Server:

```bash
npx json-server data.json
```

The API will be available at:

```text
http://localhost:3000
```

You should see:

```text
JSON Server started on PORT :3000
```

The `data.json` file contains the resources used to simulate the backend API.

### 3. Start SvelteKit

Open another terminal in the project root:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

### Development Architecture

During development, the application uses:

```text
┌─────────────────┐
│    SvelteKit    │
│    Frontend     │
└────────┬────────┘
         │
         │ HTTP / Fetch
         ▼
┌─────────────────┐
│   JSON Server   │
│      :3000      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    data.json    │
└─────────────────┘
```

JSON Server is only used as a development backend. It can later be replaced by a real API without changing the general frontend architecture.

## Environment Variables

Create a `.env` file in the project root:

```env
PUBLIC_API_URL=http://localhost:3000
```

This variable defines the base URL used by the API helper.

The `.env` file should not be committed to the repository. Use `.env.example` to provide the required environment variables for other developers.

## Contributing

Contributions are welcome.

If you want to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Test the project locally.
5. Commit your changes.
6. Open a pull request.

Before submitting a pull request, please read `CONTRIBUTING.md`.

## License

See `LICENSE` for license information.
