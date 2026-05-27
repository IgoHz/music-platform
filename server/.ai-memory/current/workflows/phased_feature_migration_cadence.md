title: Phased Feature Migration Cadence
category: workflows
confidence: high
stability: high
tags: development, refactoring, workflow
---
Rule
Large-scale functional migration must follow a strict, multi-stage workflow: Plan $\to$ Extract Contracts (DTOs/Schemas) $\to$ Isolate Business Logic $\to$ Refactor Calling Service $\to$ Refactor Calling Controller $\to$ Update Module Wiring.
Rationale
Provides a systematic, risk-mitigating approach for large-scale architectural changes.
Applies to
All non-trivial, domain-level architectural refactoring.
Constraints
The entire sequence of phases must be validated before the changes are considered complete or merged.