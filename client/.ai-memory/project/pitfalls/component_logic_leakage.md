title: Feature Logic Leakage
category: pitfalls
confidence: high
stability: high
tags: architecture, separation-of-concern
---
Rule
Component presentation layers must rigorously avoid embedding complex business logic, data fetching mechanisms, or state manipulation code.
Rationale
Prevents components from becoming monolithic 'god components,' thereby guaranteeing that pure presentation logic is easily testable and decoupled from the domain rules.
Applies to
The definition and implementation of all client-side React components.
Constraints
All side effects, data fetching, and state updates must be elevated to dedicated, testable service hooks or API modules.