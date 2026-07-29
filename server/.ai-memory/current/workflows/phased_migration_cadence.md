title: Phased Migration Cadence
category: workflows
confidence: high
stability: high
tags: refactoring, risk-mitigation, migration
---
Rule
Large‑scale refactors follow the fixed sequence: Plan → Extract Contracts → Isolate Business Logic → Refactor Service → Refactor Controller → Validate Wiring → Merge.
Rationale
Isolate risk at each stage to ensure incremental verification and rollback safety.
Applies to
Domain‑level architectural changes and major feature migrations.
Constraints
Each phase must be formally validated before proceeding to the next.