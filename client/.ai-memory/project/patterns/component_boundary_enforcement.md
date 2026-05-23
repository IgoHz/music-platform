title: Component Boundary Enforcement
category: patterns
confidence: high
stability: high
tags: UI, isolation, reusable
---
Rule
All reusable UI containers must be strictly presented as 'dumb' components, receiving all behavioral logic and state dependencies solely via typed props.
Rationale
This strict separation guarantees that the core UI library remains agnostic and reusable across fluctuating domain requirements.
Applies to
All component definitions within the UI library (src/components/ui/*).
Constraints
Components must never house state management, data fetching logic, or complex business computations.