title: Compositional Class Utility Mandate
category: patterns
confidence: high
stability: high
tags: CSS, styling, reliability
---
Rule
The creation of dynamic or state-based utility classes (e.g., conditional Tailwind classes) must always be mediated through a single, dedicated class composition helper function.
Rationale
Guarantees that complex, state-driven CSS string generation remains reliable, modular, and syntactically correct, preventing runtime styling errors.
Applies to
Any component utilizing utility-first CSS frameworks where class names are derived from props or local state.
Constraints
Never manually concatenate or hardcode complex style strings involving conditional logic.