title: Centralized Metadata Composition
category: patterns
confidence: high
stability: high
tags: seo, metadata, nextjs
---
Rule
Keep shared metadata defaults in a single composable helper, and let layouts or pages supply only route-specific overrides and dynamic fields.
Rationale
Centralized metadata composition prevents SEO drift across routes and keeps canonical, Open Graph, Twitter, and robots settings consistent.
Applies to
App Router metadata definitions, shared metadata helpers, and any route-level metadata that inherits from a common base.
Constraints
Do not duplicate site-wide canonical, robots, or social defaults in individual routes unless the route intentionally overrides them.
