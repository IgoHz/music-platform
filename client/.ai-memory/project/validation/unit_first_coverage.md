title: Unit-First Validation Requirement
category: validation
confidence: high
stability: high
tags: testing, coverage, business-logic
---
Rule
Before integrating a feature for broader testing, any piece of code containing complex business logic or non-trivial data transformation must be covered by isolated, dedicated unit tests.
Rationale
Maximizes the return on testing investment by ensuring comprehensive, deep coverage of the critical functional core (business rules) while maintaining the agility and stability of the end-to-end test suite.
Applies to
All utility functions, service handlers, and calculation modules involving core domain logic.
Constraints
High-level integration tests must never be the sole reliance for validating complex business behavior; unit tests are mandatory.