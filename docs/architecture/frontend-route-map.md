# Frontend Route Map

## Purpose

This document describes the current frontend route model for ClientFlow OS and the intended responsibility of each top-level product area.

The goal is to keep the route structure aligned with the product philosophy established during the early build: a lean dashboard, a strong application shell, and clear workflow boundaries.

## Current route model

The current top-level frontend routes are:

- `/dashboard`
- `/clients`
- `/tasks`
- `/settings`

These routes are intended to behave as real product surfaces, not placeholder navigation.

## Product intent

The route model is designed to support a lean operating system experience for a service business.

The frontend should:

- orient the user quickly,
- surface the most important work,
- and make the next action obvious.

This means the dashboard should act as a triage surface, while deeper work should happen in route-specific views.

## Shared shell responsibilities

The shared application shell is responsible for:

- persistent sidebar navigation,
- top-level orientation,
- route framing,
- and consistent layout structure.

The shell should carry enough product structure that the dashboard does not need to compensate for unclear navigation or weak boundaries.

## Route responsibilities

### `/dashboard`

The dashboard is a decision screen, not a reporting wall.

Its responsibilities are:

- provide immediate orientation,
- surface high-priority work,
- hand users off into focused product areas.

Current dashboard sections:

- Work Queue
- Next Actions
- Summary Snapshot
- Environment

The dashboard should remain intentionally lean.

### `/clients`

The clients route is responsible for relationship context and client-specific operating visibility.

It should become the primary place for:

- viewing active clients,
- understanding account status,
- opening into client-specific work context.

This route should carry client-related substance that does not belong on the dashboard.

### `/tasks`

The tasks route is responsible for execution.

It should become the primary place for:

- viewing task lists,
- filtering work,
- tracking progress across clients or workflows,
- resolving operational work without cluttering the dashboard.

This route should evolve into the main execution surface.

### `/settings`

The settings route is responsible for system configuration and operational preferences.

It should remain narrow and avoid absorbing unrelated product areas.

## Current layout direction

The frontend is currently moving toward the following pattern:

- a persistent app shell,
- route-driven content,
- focused presentational components,
- and narrow page responsibilities.

This supports maintainability and keeps the UI aligned with product intent.

## Dashboard composition notes

The dashboard currently uses a split layout:

- left side for the main work queue,
- right rail for supporting context and route handoff.

This is intentional.

The dominant visual surface should be the work queue. Supporting blocks such as summary metrics and environment details should remain secondary.

## Deferred route areas

The following areas are intentionally deferred for now:

- Leads
- Projects
- Broad analytics surfaces
- Expanded reporting views

These may return later, but they are not part of the current proven frontend slice.

## Documentation relationship

This document describes the current route structure.

Related docs:

- `docs/journal/day-1.md`
- `docs/journal/day-2.md`
- `docs/adr/0001-lean-dashboard-first.md`

## Revision notes

This route map should be updated when:

- a new top-level route is introduced,
- a route changes responsibility,
- the shell structure changes significantly,
- or the dashboard stops being a lean triage surface.