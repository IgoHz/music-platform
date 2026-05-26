# Metadata Architecture Planning

Goal:
Design a scalable metadata architecture for a Next.js App Router project by introducing consistent metadata ownership across layouts and pages.

Target outcome:
- metadata ownership becomes explicit and predictable
- layouts define shared/section-level metadata
- pages define route-specific metadata
- metadata generation becomes centralized and maintainable
- SEO behavior remains unchanged unless explicitly required
- current routing structure remains intact

Context:
Metadata is currently inconsistent across the project:
- some pages export metadata directly
- some layouts contain duplicated metadata
- titles/descriptions are hardcoded inconsistently
- OpenGraph/Twitter metadata may be partially duplicated
- generateMetadata usage may be mixed or absent

Project structure may include:
- src/app/layout.tsx
- src/app/page.tsx
- nested route groups
- dynamic routes
- parallel/intercepted routes
- metadata utilities/helpers
- shared constants/config

Constraints:
- preserve runtime behavior exactly
- preserve existing SEO behavior
- preserve route structure
- preserve current rendering behavior
- no redesign of application architecture
- no unnecessary abstractions
- no framework migration
- avoid introducing global metadata magic

Tasks:

1. Understanding
- Identify current metadata ownership structure
- Identify which layouts own shared metadata
- Identify which pages own route-specific metadata
- Identify duplication patterns
- Identify generateMetadata usage patterns
- Identify static vs dynamic metadata usage

2. Problems
- Identify metadata ownership leaks
- Identify duplicated SEO definitions
- Identify inconsistent title/description composition
- Identify missing metadata inheritance
- Identify risks in nested layouts
- Identify dynamic route metadata risks

3. Refactor Strategy (STRICT MINIMAL MIGRATION)
- Define safe incremental migration steps
- Separate structural cleanup from metadata logic cleanup
- Standardize metadata ownership gradually
- Preserve existing metadata outputs exactly
- Avoid introducing behavior changes

IMPORTANT:
Do NOT redesign SEO strategy.
Do NOT introduce unnecessary abstractions.
Only propose safe structural improvements.

4. Metadata Ownership Model
- Define layout-level responsibilities
- Define page-level responsibilities
- Define dynamic metadata ownership
- Define inheritance strategy
- Define utility/helper boundaries if needed

5. Risks
- metadata regressions
- title inheritance breakage
- OpenGraph inconsistencies
- dynamic route SEO failures
- duplicate meta tags
- hydration/rendering edge cases

6. Validation Strategy
- how to validate metadata consistency
- how to verify generated head tags
- how to validate nested layout inheritance
- how to compare SEO output before/after
- what routes should be tested

Output:

## Understanding
## Problems
## Refactor Plan (Minimal Migration Steps)
## Metadata Ownership Model
## Risks
## Validation Strategy