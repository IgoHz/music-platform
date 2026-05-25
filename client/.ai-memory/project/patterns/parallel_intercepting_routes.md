title: Parallel Intercepting Route Overlay Pattern
category: patterns
confidence: high
stability: high
tags: nextjs, routing, modal, app-router
---
Rule
When a resource needs both a full page and a modal overlay, implement the page route as the canonical destination and add a parallel intercepting route in a dedicated slot layout so the same data-aware component can render in both contexts.
Rationale
This preserves deep-linkable URLs and usable page navigation while enabling a richer overlay experience without duplicating the underlying data flow.
Applies to
Any Next.js App Router feature that must support both a standard page and a modal presentation for the same route.
Constraints
Do not split modal behavior into a separate feature implementation unless the UX intentionally differs; keep the modal and page paths aligned through shared components and consistent back navigation.
