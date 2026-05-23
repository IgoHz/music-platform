title: Systematic Utility Refactoring Protocol
category: workflows
confidence: high
stability: high
tags: Refactoring, Consistency
---
Rule: Global design token changes must follow a structured process: Audit globally $\to$ Fix in foundational component $\to$ Systematically iterate across all consumers.
Rationale: Following this process minimizes risk and ensures comprehensive coverage when updating core design standards (like spacing or typography) across a large codebase.
Applies to: Any feature requiring widespread updates to common utility values across the application.
Constraints: Never make a global change based on partial spot-fixes; always audit the entire scope first.