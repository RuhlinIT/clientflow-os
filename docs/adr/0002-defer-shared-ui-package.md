# 0002 - Defer shared UI package extraction

- Status: Accepted
- Date: 2026-07-26

## Context

ClientFlow OS is being developed inside a workspace structure that can support shared packages.

An early attempt was made to extract frontend UI pieces into a shared `packages/ui` package. While this is a valid monorepo pattern in the right context, it introduced additional coordination overhead before the core product surfaces and component boundaries were stable.

At this stage, the frontend is still in a foundation phase. The route model, dashboard composition, and workflow boundaries are actively being refined.

That means the UI layer is still learning what it is.

Extracting shared UI too early would increase abstraction before the application has enough proven repetition to justify it.

## Decision

UI components will remain inside the frontend application for now.

The shared `packages/ui` extraction is deferred until the current product slice has:

- more stable route boundaries,
- more proven component reuse,
- and clearer separation between app-specific workflow UI and genuinely shared presentation primitives.

The immediate priority is product clarity and implementation speed, not package-level reuse.

## Alternatives considered

### 1. Continue extracting UI into `packages/ui` immediately

This approach would formalize a shared component package early and keep workspace boundaries cleaner from the start.

It was rejected because the current component set is still too close to the evolving product surface. Packaging now would likely cause churn, premature abstraction, and unnecessary maintenance overhead.

### 2. Move all styling and primitives into a formal design system now

This approach would push the frontend toward a more systematized UI foundation earlier.

It was rejected because the product itself is still defining its shape. A formal shared design system is more valuable after the application surfaces prove what actually needs to be shared.

### 3. Keep everything permanently app-local

This approach would avoid packaging complexity entirely.

It was rejected as a permanent strategy because shared packaging may become useful later if multiple apps, tools, or internal surfaces begin reusing the same stable UI primitives.

## Consequences

### Positive

- Product work can move faster without package-management friction.
- Components can evolve alongside the route and workflow model.
- Refactors remain simpler while the app shell and page boundaries are still settling.
- The team can distinguish app-specific workflow UI from truly reusable primitives before extracting anything.

### Negative

- Some reusable pieces may temporarily live only inside the frontend app.
- Later extraction work may still be required once patterns stabilize.
- Workspace-level UI consistency will rely on discipline rather than package boundaries for now.

## Implementation notes

This decision implies:

- dashboard and route components stay inside the frontend app,
- extraction should happen only after repeated patterns are clearly established,
- shared packaging should begin with stable primitives rather than page-shaped components,
- and app-specific workflow components should not be forced into a shared library prematurely.

Examples of components that should remain local for now:

- `WorkQueueList`
- `NextActionsList`
- `SummarySnapshot`
- `EnvironmentStatus`

These components are tightly coupled to the current dashboard workflow and are not yet proven as cross-app primitives.

## Revisit conditions

This decision should be revisited when one or more of the following become true:

- multiple frontend surfaces need the same primitive components,
- route structure has stabilized,
- component APIs stop changing frequently,
- or a second application or internal tool begins consuming the same UI layer.

## Follow-up

Related documents:

- `docs/adr/0001-lean-dashboard-first.md`
- `docs/architecture/frontend-route-map.md`
- `docs/journal/day-2.md`

A future ADR may supersede this one if shared UI extraction becomes justified by proven reuse.