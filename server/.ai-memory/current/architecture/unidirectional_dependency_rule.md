title: Unidirectional Dependency Rule
category: architecture
confidence: high
stability: high
tags: dependency-direction, modularity, stability
---
Rule
Module dependencies may only flow toward lower‑level concerns; reverse imports are prohibited.
Rationale
Eliminate circular references and simplify architectural evolution.
Applies to
All inter‑module import graphs and wiring configurations.
Constraints
No direct imports from higher‑level modules into lower‑level modules.