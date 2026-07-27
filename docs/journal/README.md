# Journal

This folder contains chronological build notes for ClientFlow OS.

These notes capture the day-by-day implementation journey behind the project, including product direction, refactors, route changes, dashboard decisions, and documentation milestones.

Use this folder to understand how the project evolved over time.

## Purpose

Journal entries are meant to preserve session-level context that does not belong in more formal architecture documents.

They are useful for:

- tracking implementation progress,
- recording why a day of work mattered,
- summarizing shifts in product direction,
- and preserving context that may later support local AI retrieval workflows.

## What belongs here

Journal notes may include:

- daily or session-based summaries
- implementation milestones
- refactor notes
- product-direction changes
- route and UI evolution
- documentation milestones
- deferred items and follow-up questions

## What does not belong here

Do not use this folder for:

- durable architectural decisions, which belong in `docs/adr/`
- current-state system structure, which belongs in `docs/architecture/`
- setup instructions, which belong in the root `README.md` or app-specific READMEs

## Entries

| File | Focus |
|------|-------|
| [day-1.md](./day-1.md) | Lean dashboard philosophy, shell-first thinking, and initial route direction |
| [day-2.md](./day-2.md) | Route alignment, dashboard refactor, component extraction, and codebase cleanup |

## Naming convention

Use lowercase, dash-separated filenames for journal entries.

Recommended pattern:

- `day-3.md`
- `day-4.md`

If the project later shifts away from day-based notes, session-based names are also acceptable as long as they stay chronological and descriptive.

Examples:

- `session-2026-07-28.md`
- `milestone-dashboard-refactor.md`

## Related docs

- [Root README](../../README.md)
- [Architecture docs](../architecture/README.md)
- [ADR index](../adr/README.md)

## Notes

Keep journal entries concise but useful.

They should explain what changed, why it mattered, and what was deferred or clarified during that session.