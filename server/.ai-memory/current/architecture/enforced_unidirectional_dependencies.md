title: Enforced Unidirectional Dependencies
category: architecture
confidence: high
stability: high
tags: dependencies, modular, stability
---
Rule
All module dependencies must flow in a strictly directional path. Communication must only occur through public, versioned API contracts, never on internal implementation details.
Rationale
Guarantees architectural resilience by allowing internal module refactoring without breaking external consumers.
Applies to
All inter-module communication and system wiring.
Constraints
A consuming module must only depend on the public contract exposed by the provider module, never its internal files or schemas.