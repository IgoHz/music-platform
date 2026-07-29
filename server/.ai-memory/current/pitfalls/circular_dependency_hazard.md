title: Circular Dependency Hazard
category: pitfalls
confidence: medium
stability: medium
tags: circular-dependency, coupling, modularity
---
Rule
Import cycles between feature modules create hidden coupling that blocks incremental builds and masks state‑synchronization bugs.
Rationale
Breaking the cycle is required before any refactor can proceed safely.
Applies to
Module dependency graphs and inter‑module wiring.
Constraints
No module may depend on a higher‑level module that in turn depends on it.