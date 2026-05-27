title: Module Exports Govern Communication
category: patterns
confidence: high
stability: high
tags: nestjs, architecture, encapsulation
---
Rule
A consuming module must only import and rely on a provider module's explicitly exported definitions (e.g., CommentsModule exporting CommentsService), prohibiting direct resource (schema/repository) imports between feature modules.
Rationale
Enforces clean dependency boundaries at the module definition level, improving system robustness.
Applies to
All module wiring configurations (e.g., imports array in NestJS/Spring).
Constraints
All dependencies must be resolved through the module container's exported services or contracts.