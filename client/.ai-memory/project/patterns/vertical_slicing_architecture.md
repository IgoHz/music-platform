title: Feature Vertical Slicing
category: patterns
confidence: high
stability: high
tags: architecture, cohension
---
Rule
The codebase must be structured using a strict vertical slice model, ensuring that every feature directory contains all related aspects: state definitions, API service layers, presentation components, and relevant domain hooks.
Rationale
Achieves superior code cohesion by grouping all related code for a single domain within one physical location, simplifying maintenance and accelerating feature development.
Applies to
The directory structure within the application's src/features folder.
Constraints
Functional logic should never be distributed or scattered across unrelated feature module directories.