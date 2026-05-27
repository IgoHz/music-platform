title: Centralized State Mutation Coordination
category: patterns
confidence: high
stability: high
tags: dataflow, integrity, service
---
Rule
When a transaction initiated in one domain requires state mutation in another, the initiating service must explicitly coordinate the mutation via a defined contract, rather than relying on side effects or shared mutable repositories.
Rationale
Enforces explicit data flow governance for complex state changes, providing clear boundaries for side-effect management.
Applies to
Inter-domain API workflows and transactional boundaries.
Constraints
State mutation must be explicit and traceable to a single coordinating transaction boundary.