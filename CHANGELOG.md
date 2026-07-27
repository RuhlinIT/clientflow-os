# Changelog

All notable changes to ClientFlow OS will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added
- Extracted focused dashboard presentational components: `WorkQueueList`, `NextActionsList`, `SummarySnapshot`, and `EnvironmentStatus`.
- Added route-aware dashboard actions and work queue handoff links.
- Added a frontend-specific README and daily journal notes for documentation continuity.

### Changed
- Refined the frontend app shell around a lean route structure: Dashboard, Clients, Tasks, and Settings.
- Reworked the dashboard into a focused work queue with a compact right rail.
- Updated dashboard data structures to use normalized objects for route-driven rendering.
- Revised root documentation to reflect the current working frontend slice instead of broader deferred platform scope.

### Deferred
- Shared `packages/ui` extraction until core app surfaces are more stable.
- Broader analytics and reporting views until primary workflows are solid.
- Leads and projects as first-class product areas until the current route model proves itself.

## [0.1.0] - 2026-07-26

### Added
- Dockerized frontend development environment.
- React + Vite frontend foundation.
- Tailwind CSS setup.
- Sidebar navigation and route-based shell.

### Changed
- Established the project as a self-hosted service business operating system built in public.