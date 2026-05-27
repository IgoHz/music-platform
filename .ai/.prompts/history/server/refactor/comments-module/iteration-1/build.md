Goal:
Execute a safe incremental refactor by extracting comment-related logic from the "tracks" module into a dedicated "comments" module.

CRITICAL EXECUTION RULE:
This is a phased migration. Do NOT attempt to complete the entire refactor in one pass.

Context:
You are implementing a migration defined in a previous PLAN stage.
Your job is execution only, not redesign.

Current scope:
- src/tracks/dto/create-comment.dto.ts
- src/tracks/schemas/comment.schema.ts
- src/tracks/tracks.controller.ts
- src/tracks/tracks.service.ts
- src/tracks/tracks.module.ts

Target outcome:
- create/complete "comments" module
- move comment DTO/schema/controller/service logic into it
- keep "tracks" module behavior unchanged
- preserve all API endpoints and responses

────────────────────────────
EXECUTION RULES (STRICT)
────────────────────────────

- Reread every file BEFORE editing it.
- Treat any previous file snapshot as stale.
- Use minimal, surgical edits only.
- NEVER rewrite full files unless explicitly required.
- NEVER change unrelated formatting or structure.
- Avoid multi-file rewrites in a single operation.
- If a patch fails, reread file and retry with smaller scope.

────────────────────────────
PHASED EXECUTION (MANDATORY)
────────────────────────────

If multiple changes are required, execute ONLY the first applicable phase below.

PHASE 1 — MODULE SKELETON
- Create comments module structure (if missing)
- Ensure NestJS module file exists and is valid
- Do NOT move logic yet

PHASE 2 — MOVE SCHEMA + DTO
- Move comment schema into comments module
- Move DTO into comments module
- Fix imports accordingly
- Ensure no behavioral change

PHASE 3 — MOVE SERVICE LOGIC
- Extract comment logic from tracks.service.ts into comments.service.ts
- Preserve API behavior exactly
- Do not refactor business logic

PHASE 4 — CONTROLLER MIGRATION
- Move comment endpoints into comments.controller.ts
- Ensure routes remain identical

PHASE 5 — WIRING
- Fix module imports/exports
- Ensure dependency direction:
  tracks → comments (if needed), NOT circular

────────────────────────────
DEPENDENCY RULES
────────────────────────────

- Comments module owns comment logic
- Tracks module must NOT contain comment business logic
- No circular dependencies allowed
- Keep NestJS wiring explicit and minimal

────────────────────────────
VALIDATION CHECK (AFTER EACH PHASE)
────────────────────────────

Before finishing:
- ensure imports compile logically
- ensure no broken references remain
- ensure no API behavior changed
- ensure only intended files were modified

────────────────────────────
OUTPUT EXPECTATION
────────────────────────────

- Small, incremental diffs
- No large rewrites
- No architectural redesign
- No unrelated refactors