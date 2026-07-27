# 0001 - Lean dashboard first

- Status: Accepted
- Date: 2026-07-26

## Context

ClientFlow OS is being built in public as a real full-stack product.

The early frontend risk was drifting into a generic admin-style dashboard with too many widgets, weak route boundaries, and visual density that outpaced actual product clarity.

The project narrative established early on that the dashboard should not prove how much can fit on one screen. It should prove that the product understands what matters.

That required an explicit architectural and product decision about how the frontend should start.

## Decision

The frontend will begin with a lean dashboard supported by a strong shared application shell and clear route boundaries.

The dashboard will be treated as a triage and handoff surface.

It should do three things well:

- orient the user,
- surface the most important work,
- make the next action obvious.

The frontend will prioritize top-level route clarity across:

- Dashboard
- Clients
- Tasks
- Settings

The dashboard will remain intentionally narrow, while deeper workflow substance will be pushed into route-specific surfaces.

## Alternatives considered

### 1. Start with a dense multi-widget dashboard

This approach would have emphasized metrics, analytics cards, recent activity, and broader overview panels early.

It was rejected because it would create visual complexity before the route model and workflow surfaces were mature.

### 2. Build feature routes first without a meaningful dashboard

This approach would have skipped dashboard design and focused only on deeper pages.

It was rejected because the product still needs a clear operating entry point and shared orientation surface.

### 3. Start with a broader module map including leads, projects, and analytics

This approach would have expanded the top-level surface earlier.

It was rejected because it would increase product sprawl before the initial workflow boundaries had been proven.

## Consequences

### Positive

- The codebase stays aligned with the published product story.
- The dashboard remains easier to maintain.
- Route responsibilities are clearer earlier in the build.
- The app shell becomes a first-class part of the product architecture.
- Future components can be added within a clearer workflow model.

### Negative

- Some audiences may expect a more feature-heavy dashboard early.
- Analytics and reporting surfaces are intentionally delayed.
- Broader product areas such as leads and projects remain deferred longer.

## Implementation notes

This decision implies:

- the shell should be built before dashboard density increases,
- the dashboard should emphasize work queue and action handoff,
- summary and environment blocks should remain secondary,
- top-level routes should feel like real product areas,
- and deferred modules should not be promoted prematurely.

## Follow-up

Related documents:

- `docs/architecture/frontend-route-map.md`
- `docs/journal/day-1.md`
- `docs/journal/day-2.md`

Future ADRs may supersede parts of this decision if the route model evolves or if additional workflow areas prove necessary.