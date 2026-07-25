# ClientFlow OS Frontend

This is the frontend for ClientFlow OS.

It is built with React, Vite, Tailwind CSS, and React Router. Right now, the frontend is focused on the application shell, dashboard layout, navigation, and route structure for the larger self-hosted platform.

## Current scope

The frontend currently includes:
- Dashboard shell
- Sidebar navigation
- Header layout
- Routing structure
- Placeholder pages for core sections
- Local Docker-based development support

## Tech stack

- React
- Vite
- Tailwind CSS
- React Router

## Run locally

### Install dependencies

From the project root:

```bash
pnpm install
```

Or from this folder:

```bash
pnpm install
```

### Start the frontend in development

If you are using the project Docker setup, start it through Docker Compose from the project Docker directory.

If you want to run it directly:

```bash
pnpm dev --host 0.0.0.0
```

## Frontend structure

```text
src/
  components/
  layouts/
  pages/
  routes/
```

## Current pages

- Dashboard
- Leads
- Projects
- Tasks
- Clients
- Analytics
- Settings
- Login
- 404 page

## Notes

- Shared UI packaging was tested but paused for now
- UI components currently live inside this frontend app
- The focus right now is stability, speed, and visible progress
- The frontend is being built first as a usable shell before deeper backend integration

## Next frontend steps

- Add dynamic page titles
- Finish nested analytics and settings routes
- Add auth flow
- Connect to backend health and data endpoints
- Replace placeholder content with real data