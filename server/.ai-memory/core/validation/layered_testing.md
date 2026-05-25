title: Principle of Test Hierarchy
category: validation
confidence: high
stability: high
tags: [testing, quality, regression]
---
## Rule
Unit tests are mandatory for all business logic complexity. Integration testing should be limited to validating the stable, top-level interaction contracts, reserving E2E testing only for critical user paths.
## Rationale
Maximizes test Return on Investment (ROI) by focusing coverage depth on business logic while maintaining control over integration test scope and fragility.
## Applies to
The entire testing suite structure, from local development to CI/CD gates.
## Constraints
Under no circumstances should business logic validation rely solely on E2E test passes; unit-level coverage is mandatory.
---