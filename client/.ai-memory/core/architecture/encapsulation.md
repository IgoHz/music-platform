title: Encapsulated Ownership Boundary (ESOB)
category: architecture
confidence: high
stability: high
tags: [isolation, contracts, domain-driven]
---
## Rule
All domain state and primary business logic must reside within modules possessing definitive, isolated ownership. Cross-module communication must be mediated solely through explicit, versioned, and backward-compatible APIs or asynchronous message contracts, preventing direct internal data access.
## Rationale
Guarantees predictable system behavior by strictly limiting state mutation paths and enforcing clear module accountability.
## Applies to
All inter-service communication and state management aspects of the system architecture.
## Constraints
Never allow direct memory access or data passing between modules without passing through a defined, versioned public interface.
---