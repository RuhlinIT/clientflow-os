# ClientFlow OS

ClientFlow OS is a self-hosted service business operating system being built in public as a real full-stack product.

The project is intentionally focused on practical product development over tutorial-style exercises. The current frontend direction emphasizes a lean dashboard, a strong app shell, clear route boundaries, and focused workflow surfaces instead of a crowded admin interface.

## Current frontend slice

The current usable frontend slice is centered on four top-level product areas:

- Dashboard
- Clients
- Tasks
- Settings

This first slice is designed to do three things well:

- orient the user,
- surface the most important work,
- make the next action obvious.

The dashboard is intentionally lean. It acts as a work queue and handoff surface rather than a dense analytics wall.

## Current status

This project is in the foundation stage, with the frontend app shell and route structure actively taking shape.

Working so far:

- Dockerized frontend development setup
- React + Vite frontend app
- Tailwind CSS setup
- Persistent app shell
- Sidebar navigation
- Route-driven page structure
- Lean dashboard layout with focused right-rail support panels
- Extracted presentational dashboard components
- Local self-hosted development workflow

Paused for now:

- Shared `packages/ui` extraction, because early workspace packaging introduced friction before the core app structure was stable
- Broader analytics and reporting surfaces, because the current focus is route clarity and core workflow design

## Tech stack

- React
- Vite
- Tailwind CSS
- React Router
- Docker
- Caddy
- PostgreSQL
- pnpm

## Project goals

- Build a self-hosted operating system for running a service business
- Sharpen React and broader full-stack product skills through real implementation
- Keep the architecture practical and maintainable
- Document the build process in public through ongoing writing
- Create a portfolio-quality product with visible decision-making and iteration history

## Repository structure

```text
apps/
  clientflow-os/
    frontend/
packages/
ops/
  docker/
docs/
  adr/
  architecture/
  journal/
```

## Local development

### Prerequisites

Install these first:

- Docker
- Docker Compose
- Node.js 20 or newer
- pnpm

### Install dependencies

From the project root:

```bash
pnpm install
```

### Start the development environment

From the Docker directory:

```bash
docker compose up
```

## Documentation

### Project docs

- [Changelog](./CHANGELOG.md) — notable project changes and milestones
- [Frontend README](./apps/clientflow-os/frontend/README.md) — current frontend slice and UI direction

### Architecture docs

- [Architecture docs index](./docs/architecture/README.md) — entry point for current-state architecture documentation
- [Architecture overview](./docs/architecture/overview.md) — high-level system shape, repository boundaries, and architectural priorities
- [Frontend route map](./docs/architecture/frontend-route-map.md) — current frontend route structure and product responsibilities

### Decision records

- [ADR index](./docs/adr/README.md) — architecture decision record collection
- [ADR 0001](./docs/adr/0001-lean-dashboard-first.md) — lean dashboard first
- [ADR 0002](./docs/adr/0002-defer-shared-ui-package.md) — defer shared UI package extraction

### Journal

- [Journal index](./docs/journal/README.md) — chronological build notes and implementation history
- [Day 1 notes](./docs/journal/day-1.md) — dashboard philosophy and initial route direction
- [Day 2 notes](./docs/journal/day-2.md) — shell alignment, dashboard refactor, and component extraction

## Development notes

- UI components currently live inside the frontend app
- The current priority is product shape, route clarity, and maintainable UI structure
- Shared package extraction is deferred until the app’s core surfaces are more stable
- Each milestone is being built to be easy to test, demo, and document publicly
- The implementation is being kept intentionally lean so the codebase matches the published build narrative

## Near-term direction

- Strengthen the Clients route as a real workflow surface
- Strengthen the Tasks route as the main execution surface
- Add backend `GET /health` endpoint
- Add auth route patterns
- Add 404 page handling
- Prepare the repository for public GitHub presentation

## Later direction

- Client and task data model refinement
- Auth implementation
- Backend API expansion
- Structured project summaries for future local AI retrieval workflows
- Additional operating-system features only after the core workflow surfaces are solid

## Why this project exists

ClientFlow OS exists to combine product thinking, engineering practice, technical documentation, and public iteration into one real software project.

It is not meant to be another short tutorial app. The goal is to build something useful, keep the implementation honest, and let the project history show how the product evolves over time.