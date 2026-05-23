title: Compositional Class Management
category: patterns
confidence: high
stability: high
tags: CSS, DesignTokens
---
Rule: When applying dynamic or state-based styling rules (e.g., pseudo-classes or data attributes), always isolate all conditional and foundational utility classes within a designated class composition helper (e.g., cn, clsx).
Rationale: This practice ensures that class composition remains reliable, modular, and predictable when dealing with complex state interactions, preventing utility string errors.
Applies to: Any UI component using Tailwind or utility-driven class naming.
Constraints: Never manually concatenate complex style strings without using a dedicated composition utility.