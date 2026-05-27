title: Inter-Module Contract Validation
category: validation
confidence: high
stability: high
tags: testing, contract, correctness
---
Rule
Validation must include checking that all consumed contracts (type definitions, API signatures) are present, exported, and consistently used across module boundaries before integration testing.
Rationale
Reduces the risk of invisible contract drift and ensures predictable communication between independently developed modules.
Applies to
The integration testing suite and pre-PR architectural reviews.
Constraints
No test run should pass if a single contract signature has changed across boundaries without corresponding updates in all consumers.