title: Logic Must Be Managed By Services
category: decisions
confidence: high
stability: high
tags: architecture, separation-of-concern
---
Rule
All public-facing business logic must be exclusively executed within a dedicated service layer; no controller or handler should directly access or execute business logic, adhering to the principle of Separation of Concerns.
Rationale
Centralizes business logic, making it highly testable and preventing logic scattering across the API layer.
Applies to
All REST and internal API endpoints.
Constraints
Controllers are limited to handling request/response mappings and calling the dedicated service layer methods.