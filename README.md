# ClientFlow OS

ClientFlow OS is a self-hosted service business operating system that is being built in public as a real full-stack project.

The goal is to build a practical system for managing leads, projects, tasks, clients, analytics, and operations without depending on cloud-first tools. This project is also part of a long-term coding journey focused on real product work, documentation, and portfolio development.

## Current status

This project is in the foundation stage.

Working so far:
- Dockerized frontend development setup
- React and Vite app shell
- Tailwind CSS setup
- Dashboard shell
- Sidebar navigation
- React Router page structure
- Local self-hosted workflow

Paused for now:
- Shared `packages/ui` extraction, because early monorepo packaging added friction before the core app structure was stable

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
- Focus on real product progress
- Keep the architecture simple and practical
- Document the build process in public
- Turn the project into a strong portfolio asset over time

## Planned modules

- Dashboard
- Leads
- Projects
- Tasks
- Clients
- Analytics
- Settings
- Authentication
- Backend health and service endpoints

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

## Repository structure

```text
apps/
  clientflow-os/
    frontend/
packages/
ops/
  docker/
```

## Development notes

- UI components are currently kept inside the frontend app
- Shared workspace UI packaging was tested, then paused for now
- Current priority is product progress, documentation, and public sharing
- The project is being built in steps so each milestone is easy to test, demo, and write about

## Roadmap

### Near term
- Finalize dashboard shell
- Add nested settings and analytics routes
- Add backend `GET /health` endpoint
- Add auth route patterns
- Add 404 page handling
- Prepare the repo for GitHub sharing

### Mid term
- Leads and clients data model
- Projects and task workflow
- Analytics pages with real data
- Auth implementation
- Backend API expansion

### Long term
- Full self-hosted service business platform
- Better documentation and demos
- Public build logs and case study material
- Portfolio-ready project history

## Why this project exists

ClientFlow OS exists to combine coding practice, product thinking, technical documentation, and portfolio development into one real project.

It is not meant to be another short tutorial app. The goal is to build something useful, document the work honestly, and keep improving it over time.