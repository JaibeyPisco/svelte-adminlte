# SvelteKit AdminLTE 4 Dashboard Template

An open-source, highly optimized administrative boilerplate migrating **AdminLTE 4** and **Bootstrap 5** natively into the **SvelteKit** and **Svelte 5** ecosystem. Built for developers seeking a production-ready, minimal-dependency alternative to legacy dashboard environments.

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
* Integrated JSON Server development API
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

* [x] Sidebar menu
* [ ] Treeview menu
* [x] Breadcrumbs

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

Clone the repository and install the development packages:

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the project root based on the example configuration:

```bash
cp .env.example .env
```

The default configuration inside `.env` defines the mock backend URL:

```env
PUBLIC_API_URL=http://localhost:3000
```

### 3. Start Development Server

The template comes pre-configured with a dual-execution development environment. Running the main development script will launch both the **SvelteKit client** and a **JSON Server** mock database backend simultaneously in a single terminal session:

```bash
npm run dev
```

* **SvelteKit App:** [http://localhost:5173](http://localhost:5173)
* **Mock JSON API REST:** [http://localhost:3000](http://localhost:3000)

The underlying mock database resources are managed directly inside `static/data.json`.

### Development Architecture

During development, the application operates through the following local pipeline:

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

JSON Server is only used to simulate the API endpoints. It can easily be replaced by your real staging or production database API without needing adjustments to the core frontend application layer.

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
