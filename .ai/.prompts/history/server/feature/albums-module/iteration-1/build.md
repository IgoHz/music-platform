# 🏗️ BUILD — Albums Feature Implementation

Goal:
Incrementally implement the `albums` module that groups `tracks` without modifying existing track behavior.

This is a controlled, phase-based execution process.

────────────────────────────
EXECUTION SAFETY RULES
────────────────────────────

- Reread EACH file immediately before editing
- NEVER assume repository state
- NEVER rely on previous edit success
- Prefer smallest possible edit scope (line/symbol level)
- Avoid full-file rewrites
- Avoid unrelated formatting changes
- Modify only directly relevant files
- Prefer additive changes over destructive changes

────────────────────────────
CRITICAL SYNCHRONIZATION RULE
────────────────────────────

If ANY edit fails:

1. STOP immediately
2. Reread the file from disk
3. Re-locate the exact target code
4. Re-evaluate actual repository state
5. Retry with smaller, localized change

FORBIDDEN AFTER FAILURE:
- assuming previous state is valid
- continuing to next phase
- expanding scope of changes
- retrying without reread

────────────────────────────
ANTI-DRIFT RULE
────────────────────────────

Before every edit:
1. Read file from disk
2. Locate exact symbol/target
3. Confirm exact match
4. Apply minimal patch only

If target is not found:
→ DO NOT EDIT

────────────────────────────
PHASED EXECUTION (MANDATORY)
────────────────────────────

Execute ONLY ONE phase at a time.

STOP after each completed phase.

────────────────────────────
PHASE 1 — MODULE SETUP
────────────────────────────
- Create `albums` module structure
- Register module in app
- No schema or logic changes
- No dependency on tracks yet

Expected output:
- albums module exists and is wired into NestJS

────────────────────────────
PHASE 2 — DATA MODEL (ALBUM ENTITY)
────────────────────────────
- Create Album schema/entity
- Define relationship to tracks (track IDs or references)
- DO NOT modify Track schema
- DO NOT introduce bidirectional relations

Expected output:
- Album model exists independently

────────────────────────────
PHASE 3 — DTO LAYER
────────────────────────────
- Create `CreateAlbumDto`
- Validate:
  - name/title
  - list of track IDs
- Ensure validation only (no business logic)

Expected output:
- Input layer for album creation exists

────────────────────────────
PHASE 4 — SERVICE LAYER
────────────────────────────
- Implement `albums.service.ts`
- Implement:
  - createAlbum()
  - getAlbumById()
  - getAllAlbums()
- Resolve tracks via TracksService (read-only)
- DO NOT modify tracks module

Expected output:
- Album business logic fully functional

────────────────────────────
PHASE 5 — CONTROLLER + ROUTES
────────────────────────────
- Implement `albums.controller.ts`
- Add endpoints:
  - POST /albums
  - GET /albums
  - GET /albums/:id
- Ensure no changes to `/tracks` routes

Expected output:
- Albums API fully exposed

────────────────────────────
PHASE 6 — INTEGRATION & WIRING
────────────────────────────
- Wire module dependencies in NestJS
- Ensure:
  - albums → tracks (one-way dependency only)
  - no circular imports
- Validate module graph integrity

Expected output:
- Clean module separation without dependency cycles

────────────────────────────
VALIDATION CHECKPOINT (after each phase)
────────────────────────────

Before moving to next phase, verify:

- build compiles successfully
- no missing imports
- no broken NestJS DI graph
- tracks module behavior unchanged
- albums module isolated correctly
- no circular dependencies introduced

────────────────────────────
STOP CONDITION
────────────────────────────

STOP after completing ONE phase.

Do NOT continue to next phase automatically.