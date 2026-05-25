title: ThreeTierServiceContractEnforcement
category: patterns
confidence: high
stability: high
tags: dataflow, contract, separation-of-concern
---
Rule
All domain transactions must follow a strict, sequential data flow: API request payloads must pass through Data Transfer Objects (DTOs) for external validation, then through a dedicated Service layer for executing business logic, culminating in internal validation using schemas.
Rationale
This layered approach separates concerns: DTOs handle API shape validation; the Service layer handles logic; Schemas handle data integrity checks, maximizing robustness and testability.
Applies to
Every public API endpoint and state-modifying internal workflow.
Constraints
No business logic execution is permitted to read input parameters directly; all inputs must first be mapped to or validated against the DTO structure.