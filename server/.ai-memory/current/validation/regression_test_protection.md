title: Regression Test Protection
category: validation
confidence: high
stability: high
tags: testing, regression, safety
---
Rule
Unit tests must cover all business logic; integration/E2E tests are supplemental and never the sole validator of correctness.
Rationale
Ensure core logic remains resilient even when surface‑level contracts evolve.
Applies to
All modules with public business logic exposed through services or APIs.
Constraints
Test suites must fail if any unit‑level behavior changes unexpectedly.