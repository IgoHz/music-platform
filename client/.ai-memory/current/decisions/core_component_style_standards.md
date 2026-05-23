title: Minimum Readability Standard for Components
category: decisions
confidence: high
stability: high
tags: DesignSystem, Typography
---
Rule: Define and maintain a minimum visual utility standard (e.g., text-sm) for all core, user-facing components. All new components must inherit this baseline standard.
Rationale: This guarantees a consistent baseline of readability and visual rhythm, preventing individual components from degrading the overall design quality of the application.
Applies to: The definition and construction of any reusable core UI component (Inputs, Buttons, Labels, etc.).
Constraints: Do not allow components to fall back to smaller utility sizes without formal architectural review and policy exemption.