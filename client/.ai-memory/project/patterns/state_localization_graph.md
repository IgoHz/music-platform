title: Localized State Graph Management
category: patterns
confidence: high
stability: high
tags: state, immutability, scope
---
Rule
Complex application state management must be aggressively partitioned and contained within the scope of the nearest relevant feature boundary, relegating global state to only essential, immutable, aggregated values.
Rationale
Reduces the overall state mutation surface area, making features independently testable and significantly mitigating the risk of cascading state-related changes.
Applies to
Any component or module utilizing a state management solution (e.g., Zustand, Redux, Context).
Constraints
State mutations must be scoped as tightly as possible; avoid lifting state simply for temporary convenience.