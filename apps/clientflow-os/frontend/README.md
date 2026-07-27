# ClientFlow OS Frontend

This frontend is the current working product slice for ClientFlow OS.

It is being shaped around a lean application shell, route-driven workflows, and a dashboard that prioritizes orientation and action over visual density.

## Current route model

The active top-level routes are:

- Dashboard
- Clients
- Tasks
- Settings

These routes are intended to behave as real product areas, not placeholder navigation.

## Frontend direction

The current frontend philosophy is intentionally narrow:

- Start with the shell before the widgets
- Treat route boundaries as product design
- Keep the dashboard focused on triage and handoff
- Push real work into route-specific surfaces
- Favor maintainability and clarity over flashy UI

## Dashboard intent

The dashboard should do three things well:

- orient the user,
- surface the most important work,
- make the next action obvious.

It should not become a crowded analytics wall or a generic admin homepage.

## Current dashboard structure

The current dashboard is built around:

- Work Queue
- Next Actions
- Summary Snapshot
- Environment

The left side carries the main work queue. The right rail carries route handoff and compact supporting context.

## Component extraction

The current dashboard UI has been split into small presentational pieces:

- `WorkQueueList`
- `NextActionsList`
- `SummarySnapshot`
- `EnvironmentStatus`

The route page owns composition. The child components own rendering.

## Current priorities

- Strengthen the Clients route into a real workflow surface
- Strengthen the Tasks route into the main execution surface
- Keep the shell and route model stable while the product shape settles
- Delay cross-app shared UI extraction until the current slice is more proven

## Notes

- UI components currently live inside the frontend app
- The dashboard is intentionally lean so it matches the published build narrative
- This frontend is being built as part of a broader self-hosted full-stack system, but the current slice is intentionally focused