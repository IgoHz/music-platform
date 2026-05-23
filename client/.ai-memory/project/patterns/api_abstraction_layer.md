title: Mandatory API Gateway Layering
category: patterns
confidence: high
stability: high
tags: data-fetching, contracts, isolation
---
Rule
All data acquisition and service interaction details must be entirely encapsulated and mediated through explicit, versioned API abstraction modules. Consumers must only interact with this defined, stable data contract.
Rationale
Facilitates backend service swapping, abstracting away details like caching strategies, endpoint changes, or versioning adjustments without modifying any consumer components.
Applies to
Any consumer component, hook, or service that requires reading or mutating domain state via data fetching.
Constraints
Raw API calls (e.g., direct fetch() or external SDK calls) are forbidden in presentation or domain logic layers.