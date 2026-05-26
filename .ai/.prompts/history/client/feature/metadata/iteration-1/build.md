# Incremental Metadata Migration

Goal:
Execute incremental metadata normalization for a Next.js App Router project.

CRITICAL RULE:
This is NOT a redesign.
This is a controlled, minimal-risk metadata migration.

────────────────────────────
EXECUTION SAFETY RULES
────────────────────────────

- Reread EACH file immediately before editing it.
- NEVER assume file content is up to date.
- NEVER use large block replacements.
- NEVER perform broad metadata rewrites.
- Prefer smallest possible change.
- Modify ONLY ONE file per operation when possible.
- After each edit, treat previous snapshots as stale.
- If patch fails, reread and retry with smaller scope.

────────────────────────────
CRITICAL ANTI-DRIFT RULE
────────────────────────────

Before every edit:
1. Read file from disk
2. Locate exact metadata export/symbol
3. Confirm structure matches expectations
4. Apply minimal edit only

If target structure differs:
- STOP
- reread
- adapt incrementally

────────────────────────────
PHASED EXECUTION (MANDATORY)
────────────────────────────

Execute ONLY ONE phase at a time.

PHASE 1 — METADATA DISCOVERY
- Identify all metadata exports
- Identify generateMetadata usage
- Identify ownership inconsistencies
- No modifications yet

PHASE 2 — ROOT LAYOUT NORMALIZATION
- Normalize root metadata definition
- Preserve existing metadata behavior
- Avoid changing rendering logic

PHASE 3 — NESTED LAYOUT OWNERSHIP
- Move section-level metadata into layouts where appropriate
- Preserve inheritance behavior
- Avoid duplicate definitions

PHASE 4 — PAGE-LEVEL OWNERSHIP
- Ensure route-specific metadata belongs to pages
- Preserve dynamic metadata behavior
- Preserve route params behavior

PHASE 5 — DYNAMIC METADATA CLEANUP
- Normalize generateMetadata usage
- Ensure async metadata logic is isolated properly
- Avoid duplicate fetching logic

PHASE 6 — SHARED UTILITIES (ONLY IF NECESSARY)
- Extract duplicated metadata builders minimally
- Avoid over-abstraction
- Keep ownership explicit

────────────────────────────
NEXT.JS METADATA RULES
────────────────────────────

- Preserve App Router conventions
- Preserve Metadata typing
- Preserve generateMetadata signatures
- Preserve async behavior
- Preserve static optimization where applicable
- Do NOT break streaming/rendering behavior

────────────────────────────
FILE MODIFICATION RULES
────────────────────────────

- layout.tsx: minimal metadata edits only
- page.tsx: preserve rendering logic
- metadata utilities: small targeted extraction only
- avoid unrelated formatting changes
- avoid import reordering unless necessary

────────────────────────────
DEPENDENCY RULES
────────────────────────────

- layouts own shared metadata
- pages own route-specific metadata
- dynamic routes own dynamic metadata
- avoid circular utility dependencies
- avoid hidden metadata inheritance logic

────────────────────────────
VALIDATION AFTER EACH STEP
────────────────────────────

- ensure metadata still resolves correctly
- ensure imports resolve
- ensure no duplicate metadata generation
- ensure rendering behavior unchanged
- ensure route structure preserved
- ensure generateMetadata still works correctly

STOP after completing ONE phase.