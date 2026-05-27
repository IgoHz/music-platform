Goal:
Execute incremental migration to extract comment logic from tracks module into a dedicated comments module.

CRITICAL RULE:
This is NOT a full refactor.
This is a controlled step-by-step migration.

────────────────────────────
EXECUTION SAFETY RULES
────────────────────────────

- Reread EACH file immediately before editing
- NEVER assume file state
- NEVER trust previous snapshots after writes
- Prefer smallest possible edit scope
- Prefer line-level or symbol-level edits
- Avoid large block replacements
- Avoid replace-all style edits
- Modify only directly relevant files
- Prefer additive edits over destructive rewrites

────────────────────────────
CRITICAL SYNCHRONIZATION RULE
────────────────────────────

A failed edit invalidates all previous assumptions about repository state.

If ANY edit fails:
1. STOP further edits immediately
2. Reread the target file from disk
3. Re-evaluate actual repository state
4. Locate exact current content again
5. Retry with SMALLER edit scope only

FORBIDDEN AFTER FAILED EDIT:
- assuming previous edits succeeded
- assuming intended repository state
- continuing migration phases
- escalating edit scope
- replacing entire files as recovery strategy
- retrying multiple edits without reread

If synchronization fails:
STOP phase execution completely.

────────────────────────────
ANTI-DRIFT RULE
────────────────────────────

Before EVERY edit:
1. Read file from disk
2. Locate exact target symbol/string
3. Confirm exact match
4. Apply minimal localized edit only

If target does not match:
- DO NOT EDIT
- reread file first

────────────────────────────
PATCH RECOVERY RULE
────────────────────────────

If a large edit fails:
- reduce edit scope
- isolate smaller symbols/functions
- retry localized edits only

NEVER increase edit scope after failure.

────────────────────────────
PHASED EXECUTION (MANDATORY)
────────────────────────────

Execute ONLY ONE phase.

PHASE 1 — MODULE SETUP
- Ensure comments module exists
- Create module structure only
- No logic migration

PHASE 2 — MOVE DTO + SCHEMA
- Move DTO and schema
- Fix imports only
- Preserve behavior exactly

PHASE 3 — MOVE SERVICE LOGIC
- Extract comment logic only
- Create comments.service if required
- Preserve existing behavior

PHASE 4 — CONTROLLER MIGRATION
- Move comment endpoints
- Preserve routes exactly

PHASE 5 — MODULE WIRING
- Fix imports/exports
- Validate NestJS dependency graph
- Prevent circular dependencies

STOP after ONE completed phase.

────────────────────────────
FILE MODIFICATION RULES
────────────────────────────

- DTO/schema edits:
  - minimal targeted edits only
  - never full file rewrites unless unavoidable

- Service/controller edits:
  - prefer function-level extraction
  - preserve surrounding structure

- Module edits:
  - minimal import/export changes only

- Do NOT:
  - reorder imports unnecessarily
  - reformat unrelated code
  - rewrite healthy code paths

────────────────────────────
DEPENDENCY RULES
────────────────────────────

- comments module owns comment logic fully
- tracks module must not retain comment business logic
- dependency direction must remain explicit
- no circular dependencies allowed

────────────────────────────
VALIDATION AFTER EACH STEP
────────────────────────────

- verify imports resolve
- verify references exist
- verify file remains structurally valid
- verify behavior unchanged
- verify only intended files changed
- verify no stale references remain

If uncertainty exists:
STOP and reread repository state first.