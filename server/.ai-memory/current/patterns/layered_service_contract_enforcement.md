title: Layered Service Contract Enforcement
category: patterns
confidence: high
stability: high
tags: service-layer, contract, separation-of-concern
---
Rule
Business logic must flow through a dedicated service layer; all public API signatures, data schemas, and workflow steps are immutable without formal impact analysis and stakeholder sign‑off.
Rationale
Centralizes business logic for testability and prevents scattering across handlers.
Applies to
All REST and internal API endpoints.
Constraints
Controllers may only handle request/response mapping and invoke dedicated service methods.