# Architecture Docs

This folder contains current-state architecture documentation for ClientFlow OS.

Use these documents to understand how the system is currently shaped, how responsibilities are divided, and which boundaries are intentional at this stage of the project.

These files describe the system as it exists today.

For durable architectural decisions, use the ADR collection. For chronological implementation history, use the journal notes.

## Documents

- [Overview](./overview.md) — high-level system shape, repository boundaries, and architectural priorities
- [Frontend route map](./frontend-route-map.md) — current frontend route structure and product responsibilities

## Related docs

- [ADR index](../adr/README.md) — durable architectural decisions and their rationale
- [Day 1 journal](../journal/day-1.md) — initial dashboard philosophy and route direction
- [Day 2 journal](../journal/day-2.md) — shell alignment, dashboard refactor, and component extraction
- [Medium posts](../medium/README.md) — public build-in-public articles and source copies

## Notes

- Keep documents in this folder focused on current structure and system boundaries
- Put decision history in `docs/adr/`
- Put build-session notes in `docs/journal/`
- Update this folder when the shape of the system changes in a meaningful way