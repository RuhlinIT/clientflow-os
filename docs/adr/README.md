# Architecture Decision Records

This folder contains the Architecture Decision Records (ADRs) for ClientFlow OS.

An ADR captures a single important architectural or product-shaping decision along with its context, the decision itself, and its consequences.

These records exist to preserve engineering intent over time so the codebase can answer not only **what** changed, but **why** it changed.

## Purpose

ADRs are used in this project to document decisions that are significant enough to affect:

- product structure,
- frontend or backend architecture,
- repository organization,
- workflow boundaries,
- long-term maintainability,
- or implementation direction that may need future justification.

ADRs are not daily notes, meeting transcripts, or informal build logs.

Those belong in:

- `docs/journal/` for chronological progress notes
- `docs/architecture/` for current-state system and structure documents

## ADR conventions

This repository uses the following ADR conventions:

- One ADR per meaningful decision
- One file per ADR
- Sequential numbering: `0001-...`, `0002-...`, `0003-...`
- Lowercase, dash-separated filenames
- Markdown format
- Short, decision-focused documents
- Status tracked in each file

Each ADR should stay narrowly scoped. If two decisions can change independently, they should usually be written as separate ADRs.

## ADR lifecycle

Each ADR should include a status line near the top.

Common statuses:

- `Proposed` — under discussion, not yet accepted
- `Accepted` — approved and active
- `Superseded` — replaced by a newer ADR
- `Deprecated` — no longer preferred, but not necessarily replaced
- `Rejected` — considered, but not adopted

Accepted ADRs should not be rewritten in place to reflect a different decision later. If the direction changes, create a new ADR and mark the older one as superseded.

## When to write an ADR

Write an ADR when a decision is likely to matter later.

Examples:

- introducing or removing a top-level route area
- choosing or deferring a shared package strategy
- deciding how the dashboard should behave as a product surface
- changing data ownership boundaries between frontend and backend
- adopting or rejecting a major framework or architectural pattern

Do not write an ADR for:

- small styling tweaks
- routine refactors with no lasting architectural impact
- day-by-day progress updates
- temporary experiments that never became real decisions

## Recommended structure

The standard structure for ADRs in this repository is:

```md
# 000x - Short decision title

- Status: Accepted
- Date: YYYY-MM-DD

## Context

Why this decision was needed.

## Decision

What was decided.

## Alternatives considered

What other options were evaluated and why they were not chosen.

## Consequences

What trade-offs, benefits, or constraints follow from the decision.

## Implementation notes

Optional details about how the decision affects the codebase.

## Follow-up

Links to related ADRs or documentation.
```

## Current ADR index

| ADR | Title | Status |
|-----|-------|--------|
| [0001](./0001-lean-dashboard-first.md) | Lean dashboard first | Accepted |
| [0002](./0002-defer-shared-ui-package.md) | Defer shared UI package extraction | Accepted |

## Related documentation

- [Root README](../../README.md)
- [Frontend route map](../architecture/frontend-route-map.md)
- [Day 1 journal](../journal/day-1.md)
- [Day 2 journal](../journal/day-2.md)

## Notes for future ADRs

As ClientFlow OS evolves, this folder should document the durable decisions that shape the system.

Likely future ADR topics include:

- backend API boundary decisions
- authentication architecture
- database modeling strategy
- local AI context storage and retrieval design
- when and how shared packages should be introduced

The goal is not to document everything.

The goal is to document the decisions that would otherwise be easy to forget, hard to reconstruct, or expensive to re-debate later.