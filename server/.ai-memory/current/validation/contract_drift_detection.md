title: Contract Drift Detection
category: validation
confidence: medium
stability: medium
tags: contracts, validation, safety
---
Rule
Pre‑integration validation must verify that any contract change is reflected in all consumers before merging to prevent silent mismatches.
Rationale
Detect invisible drift early and block breaking changes until consumers are updated.
Applies to
API signature updates, schema evolution, and versioned interface modifications.
Constraints
No consumer may remain unchecked after a contract alteration.