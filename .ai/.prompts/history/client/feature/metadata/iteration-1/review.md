# Metadata Architecture Review

Review implemented metadata normalization changes for a Next.js App Router project.

Goal:
Ensure safe metadata ownership separation without SEO or rendering regressions.

────────────────────────────
REVIEW PRIORITIES
────────────────────────────

1. Correctness
- Does metadata still render correctly?
- Are titles/descriptions preserved?
- Are OpenGraph/Twitter tags unchanged?
- Does generateMetadata still behave correctly?

2. Ownership Boundaries
- Do layouts own shared metadata only?
- Do pages own route-specific metadata?
- Is metadata ownership explicit and predictable?
- Is inheritance clean and intentional?

3. Dependency Integrity
- Any unnecessary metadata utilities introduced?
- Any circular dependencies?
- Any hidden metadata composition?
- Are imports minimal and justified?

4. Migration Completeness
- Are duplicated metadata definitions removed?
- Are dynamic routes handled correctly?
- Is metadata colocated appropriately?
- Are nested layouts normalized correctly?

5. Next.js Compliance
- Metadata typing correct?
- generateMetadata signatures correct?
- Static/dynamic rendering preserved?
- App Router conventions respected?

6. Regression Risks
- duplicate meta tags
- broken inheritance
- incorrect canonical URLs
- OpenGraph inconsistencies
- async metadata race conditions
- route-specific SEO regressions

────────────────────────────
SPECIFIC CHECKS
────────────────────────────

- root layout metadata correctness
- nested layout inheritance correctness
- page-level metadata ownership
- dynamic route metadata correctness
- generateMetadata usage correctness
- canonical URL consistency
- OpenGraph consistency
- Twitter metadata consistency
- metadata utility minimalism

────────────────────────────
OUTPUT FORMAT
────────────────────────────

## Critical Issues
## Possible Regressions
## Metadata Ownership Analysis
## Dependency Issues
## Next.js Compliance
## Migration Completeness
## Maintainability Notes
## Final Confidence (0–10)