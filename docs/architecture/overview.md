# Architecture Overview

## Purpose

ClientFlow OS is a self-hosted service business operating system being built in public as a real full-stack product.

This document provides a high-level view of the current system structure, the boundaries between major parts of the repository, and the architectural direction guiding the project at this stage.

It is intentionally brief. The goal is to help contributors understand how the system is organized and where major responsibilities currently live.

## Current system shape

The repository is currently organized around four broad areas:

- application code
- shared package space
- operations and local infrastructure
- project documentation

At the moment, the frontend application is the most actively developed product surface. The broader platform direction exists, but the current implementation focus is intentionally narrow.

## Repository map

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

### `apps/`

This area contains application code.

The primary active application is the ClientFlow OS frontend. It is currently the main place where product shape, route boundaries, and workflow structure are being established.

### `packages/`

This area exists to support shared code when it becomes justified.

At the current stage, shared package extraction is intentionally limited. The repository supports this structure, but the frontend is still proving which UI pieces are truly reusable and which ones are app-specific workflow components.

### `ops/`

This area contains operational and infrastructure-oriented project concerns.

The current development workflow is local and self-hosted in spirit, with Docker-based tooling supporting the application environment.

### `docs/`

This area contains architecture records, ongoing project notes, and decision history.

Documentation is intentionally split into separate layers so architectural decisions, current system structure, and build-session notes do not collapse into one mixed folder.

## Major architectural areas

### Frontend application

The frontend is the current working product slice.

Its immediate architectural priorities are:

- a persistent application shell,
- route-driven product structure,
- a lean dashboard,
- and focused workflow surfaces.

The frontend is deliberately being shaped around a small number of top-level product areas first, rather than trying to expose every future module up front.

See `frontend-route-map.md` for the current frontend route responsibilities.

### Shared packages

The repository can support shared packages, but package extraction is not the current priority.

The system is intentionally avoiding premature abstraction. Shared UI should only move into workspace packages once component boundaries, reuse patterns, and application responsibilities have stabilized enough to justify that separation.

See the ADR collection for the decision to defer shared UI extraction.

### Operations and local infrastructure

ClientFlow OS is intended to be self-hosted rather than cloud-first.

That direction affects both the technical stack and the overall architecture mindset. The development environment should support local iteration, predictable setup, and future platform services without depending on third-party SaaS assumptions as the architectural baseline.

At this stage, operations support development and local environment consistency more than production-scale deployment concerns.

### Documentation as architecture support

The documentation structure is part of the architecture practice for this repository.

The current documentation layers are:

- `docs/architecture/` for current-state system structure
- `docs/adr/` for durable architectural decisions
- `docs/journal/` for chronological implementation notes and build-session context
- `docs/medium/` for public build-in-public writing and publication history

This separation is intentional. It keeps the current system map, the decision log, and day-by-day engineering notes distinct.

## Current product boundary

The active frontend slice is intentionally narrow.

The current top-level product areas are:

- Dashboard
- Clients
- Tasks
- Settings

These routes are expected to become real workflow surfaces rather than placeholder navigation.

The dashboard is not intended to become a dense command center full of generic widgets. Its job is to orient the user, surface important work, and hand users off into focused routes.

Broader areas such as leads, projects, and analytics may exist later, but they are intentionally deferred until the current route model and workflow surfaces are stronger.

## Architectural invariants

The following invariants are important at the current stage of the project:

- The frontend should favor route clarity over dashboard density.
- The shell should carry orientation, not just visual framing.
- The dashboard should remain a triage surface, not a catch-all page.
- Shared abstractions should be introduced after patterns are proven, not before.
- Documentation should preserve both current structure and decision history.
- The codebase should stay aligned with the public build narrative.

These are not temporary styling preferences. They are guiding constraints for how the system should evolve.

## Current priorities

The most important near-term architectural priorities are:

- stabilize the frontend route model,
- strengthen the Clients and Tasks surfaces,
- preserve a lean dashboard,
- avoid premature packaging and over-abstraction,
- and document important decisions as they happen.

The goal is not to maximize visible feature count early. The goal is to make the product structure coherent enough that future expansion happens on top of stable boundaries.

## What is intentionally deferred

The following areas are intentionally not first-order architectural priorities right now:

- broad analytics surfaces,
- a fully expanded module map,
- aggressive shared UI extraction,
- early over-modeling of future platform concerns,
- and documentation that is more detailed than the current system maturity justifies.

This is deliberate. The project is being built in a sequence that privileges clarity and maintainability over premature completeness.

## Related documents

For more specific context, use these documents alongside this overview:

- `frontend-route-map.md` for current frontend route responsibilities
- `../adr/README.md` for the architecture decision record index
- `../adr/0001-lean-dashboard-first.md` for the dashboard-first architectural direction
- `../adr/0002-defer-shared-ui-package.md` for the shared package deferral decision
- `../journal/day-1.md` for Day 1 product direction
- `../journal/day-2.md` for Day 2 implementation alignment notes

## Revision guidance

This document should be updated when:

- the repository structure changes meaningfully,
- a new major architectural area is introduced,
- the active product boundary expands,
- or the architectural invariants no longer describe how the system is actually being built.

It should remain high level.

Detailed implementation notes belong in narrower architecture docs, ADRs, or journal entries instead of accumulating here.