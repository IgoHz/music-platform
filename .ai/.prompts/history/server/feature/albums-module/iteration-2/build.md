Goal:
Incrementally implement the albums feature.

CRITICAL RULE:
This is NOT a redesign.
This is a controlled phase-by-phase implementation.

────────────────────────────
EXECUTION SAFETY RULES
────────────────────────────

- reread files before editing
- never assume repository state
- prefer minimal localized edits
- avoid full-file rewrites
- modify only relevant files
- prefer additive changes

────────────────────────────
CRITICAL SYNCHRONIZATION RULE
────────────────────────────

If any edit fails:

1. stop immediately
2. reread the affected file
3. re-evaluate repository state
4. retry using smaller scope

Forbidden after failure:

- assuming previous state
- continuing phases
- expanding edit scope
- retrying without reread

────────────────────────────
ANTI-DRIFT RULE
────────────────────────────

Before every edit:

1. read file
2. locate exact target
3. verify target
4. apply minimal edit

If target does not match:

DO NOT EDIT

────────────────────────────
DECISION FINALITY RULE
────────────────────────────

Once a decision has been made:

- treat it as committed
- do not reopen it
- do not search for alternatives
- do not reconsider it

Revisit decisions ONLY if:

- an edit fails
- new repository information appears
- validation reveals contradiction

Otherwise:

DECISION = FINAL

────────────────────────────
NO REASONING RECURSION RULE
────────────────────────────

Do not repeatedly reconsider:

- routes
- DTO names
- decorators
- imports
- response types
- parameter types
- alternative implementations

If a question has already been answered during the current phase:

DO NOT ask it again.

Reuse the previous answer.

────────────────────────────
ACTION BIAS RULE
────────────────────────────

If:

- the phase objective is clear
- the target file is known
- no contradictions exist

Then:

STOP THINKING
PERFORM THE EDIT

Do not seek additional certainty.

────────────────────────────
PHASE TERMINATION RULE
────────────────────────────

After completing a phase:

- stop immediately
- do not plan next phase
- do not reopen completed work
- do not validate beyond checklist

Output:

PHASE COMPLETE

Next phase must be initiated externally.

────────────────────────────
PHASED EXECUTION
────────────────────────────

Execute ONE phase only.

Phase 1 — Module Setup
- create module
- register module
- no schema changes

Phase 2 — Data Model
- create Album schema
- define album → tracks relation
- do not modify Track

Phase 3 — DTO Layer
- create DTOs
- add validation

Phase 4 — Service Layer
- implement:
  - createAlbum()
  - getAlbumById()
  - getAllAlbums()

Phase 5 — Controller Layer
- implement:
  - POST /albums
  - GET /albums
  - GET /albums/:id

Phase 6 — Integration
- wire modules
- verify dependency direction
- prevent circular imports

STOP after ONE phase.

────────────────────────────
VALIDATION CHECKLIST
────────────────────────────

Verify:

- build compiles
- imports resolve
- NestJS DI graph is valid
- no circular dependencies
- track behavior unchanged
- only intended files changed

If uncertainty exists:

STOP
REREAD
RE-EVALUATE