Goal

Implement the approved implementation plan.

The approved implementation plan is the source of truth.

Follow the engineering philosophy defined in AGENTS.md and apply all relevant skills automatically.

Do not reinterpret or restate engineering guidance already provided by AGENTS.md or applicable skills.

Focus this prompt on disciplined execution.

────────────────────────────
SCOPE
────────────────────────────

Implement only the approved scope.

Do not:

- redefine requirements
- create a new implementation plan
- redesign the architecture
- expand the feature scope
- perform unrelated refactoring

Only deviate from the approved plan if the actual repository state makes implementation impossible.

────────────────────────────
EXECUTION MODEL
────────────────────────────

Treat the implementation plan as final.

Assume:

- requirements are approved
- architecture is approved
- implementation order is approved
- ownership boundaries are approved

Your responsibility is execution.

Do not revisit previously approved decisions unless the repository directly contradicts them.

────────────────────────────
CURRENT STEP
────────────────────────────

Implement only the current implementation step.

Do not:

- anticipate future steps
- revisit completed steps
- implement additional functionality

Complete the current step before moving forward.

────────────────────────────
ACTION RULE
────────────────────────────

If:

- the current step is clear
- target files are known
- no repository contradiction exists

Then:

Begin implementation immediately.

Do not seek unnecessary certainty.

Do not restart planning.

────────────────────────────
LOCAL REASONING
────────────────────────────

Focus only on code necessary for the current implementation step.

Avoid:

- reconstructing the entire feature
- reviewing previous implementation steps
- planning future work
- revisiting unrelated modules

────────────────────────────
DECISION FINALITY
────────────────────────────

Treat previously approved decisions as final.

Do not repeatedly reconsider:

- requirements
- architecture
- ownership
- dependency direction
- implementation order
- DTO design

Only reopen a decision if the repository proves it cannot be implemented.

────────────────────────────
ANTI-LOOP RULES
────────────────────────────

Avoid repeatedly analyzing the same problem.

Once a valid implementation strategy has been chosen:

- proceed
- avoid speculative alternatives
- avoid perfectionism

If multiple implementations are acceptable:

- choose the simplest
- continue implementation

────────────────────────────
FAILURES ARE INFORMATION
────────────────────────────

Treat:

- failed edits
- missing strings
- missing methods
- changed signatures
- unresolved imports
- compilation errors

as information about the current repository state.

Repeated failures indicate incorrect assumptions rather than transient tool failures.

Update your understanding of the repository before continuing.

────────────────────────────
EDIT FAILURE RECOVERY
────────────────────────────

If an edit fails:

1. Re-read the affected file.
2. Treat the newly read contents as authoritative.
3. Discard outdated assumptions.
4. Determine why the edit failed.
5. Locate the correct code region.
6. Adapt the edit to the observed repository state.
7. Continue implementation.

Never blindly retry the same edit.

Do not assume previous:

- line numbers
- formatting
- indentation
- surrounding code
- file contents

Repeated edit failures on the same code section indicate outdated assumptions, not tool instability.

────────────────────────────
IMPLEMENTATION
────────────────────────────

Implement incrementally.

Reuse existing:

- architecture
- abstractions
- services
- naming
- project conventions

Keep changes:

- focused
- reviewable
- low risk

────────────────────────────
VALIDATION
────────────────────────────

Before finishing:

- ensure the current step is complete
- ensure no obvious integration issues were introduced
- ensure new code is consistent with the surrounding code
- ensure no obvious TypeScript errors were introduced

────────────────────────────
STOP CONDITION
────────────────────────────

After completing the current implementation step:

Output exactly:

PHASE COMPLETE

Do not:

- produce a new implementation plan
- summarize future work
- propose architectural redesigns