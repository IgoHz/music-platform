title: Placeholder Metadata in Dynamic Routes
category: pitfalls
confidence: high
stability: high
tags: seo, metadata, generateMetadata
---
Rule
Do not publish placeholder titles or descriptions on resource pages that can resolve real data.
Rationale
Placeholder metadata produces misleading previews, weakens search relevance, and makes route-specific metadata harder to trust.
Applies to
Dynamic route metadata, generateMetadata implementations, and any page whose content depends on fetched resource data.
Constraints
Do not hardcode synthetic metadata for a real resource unless the route is intentionally non-indexable and the fallback is still truthful.
