Goal

Implement the approved implementation plan.

The approved implementation plan is the source of truth.

Follow the engineering philosophy defined in AGENTS.md.

Focus this prompt on disciplined execution.

────────────────────────────
REQUIRED SKILLS
────────────────────────────

This is an implementation session.

The following skills are required for this Build phase:

- execution-control
- feature-development
- incremental-development
- project-consistency
- mcp-usage

Load and apply these skills before implementation.

Also load applicable technology and quality skills when required by the
implementation, such as:

- testing
- debugging
- refactoring
- performance
- React
- Next.js
- TypeScript

Do not assume that mentioning a skill name means its contents are loaded.

────────────────────────────
REQUIRED MCPS
────────────────────────────

Before implementing a non-trivial change, search the memory-engine MCP server for relevant project context. After completing a durable architectural decision or important fix, store a concise memory with memory_store. Do not store transient progress or secrets.

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
EXECUTION CHECKPOINT
────────────────────────────

Before implementation:

1. Read .ai-memory/execution-state.md if it exists.
2. Inspect the current repository state.
3. Inspect git status and relevant diff.
4. Reconcile the execution checkpoint with the repository.
5. Identify the next incomplete implementation increment.
6. Update the checkpoint if it is missing or stale.
7. Begin implementation.

The repository is authoritative when it conflicts with the checkpoint.

The checkpoint is authoritative for intended execution progress when the
repository state alone cannot determine the next planned increment.

If `.ai-memory/execution-state.md` does not exist:

- create it;
- initialize it from the approved implementation plan;
- mark the first incomplete implementation increment as current;
- then begin implementation.

────────────────────────────
EXECUTION CHECKPOINT
────────────────────────────

Before implementation:

1. Resolve the project execution root.
2. Read `.ai-memory/execution-state.md` if it exists.
3. Read the approved implementation plan.
4. Inspect current git status/diff.
5. Determine the next incomplete plan step.
6. Inspect only the files relevant to that step.
7. Update the checkpoint before making substantial changes.

Do not reconstruct implementation progress from conversation history when
the checkpoint and repository provide the required information.

────────────────────────────
CURRENT INCREMENT
────────────────────────────

Implement the current implementation increment from the approved plan.

The current increment is the immediate execution focus, not the boundary
of the Build session.

Do not:

- anticipate unrelated future work;
- revisit completed work without evidence;
- expand the approved scope.

Complete the current increment, validate it, update
.ai-memory/execution-state.md, and then continue with the next incomplete
increment.

Completing the current increment does not end Build execution.

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
CONTINUATION LOOP
────────────────────────────

After completing an implementation increment:

1. validate the increment;
2. update `.ai-memory/execution-state.md`;
3. determine whether approved work remains;
4. if work remains, immediately continue with the next increment.

A checkpoint is not a stop condition.

Do not stop merely because:

- one file was completed;
- one step was completed;
- validation passed for one increment;
- a short progress summary could be written.

Stop only when:

- the approved implementation is complete;
- a genuine blocker requires user input;
- the repository contradicts the approved plan in a material way;
- explicit user interruption occurs.

────────────────────────────
CONTINUE DECISION
────────────────────────────

After each completed increment:

Task complete? YES / NO
User input required? YES / NO
Confirmation required? YES / NO
Environment blocked? YES / NO
Unrecoverable failure? YES / NO

If all answers are NO:

→ continue immediately.

Do not return a completion summary at an intermediate checkpoint.

────────────────────────────
BUILD TERMINATION GATE
────────────────────────────

Build may terminate only when the completion gate defined in AGENTS.md
has passed.

Before terminating:

- verify all approved plan requirements are implemented;
- verify all implementation steps are complete;
- verify affected imports and references resolve;
- run applicable typecheck/lint/tests;
- verify no known in-scope issues remain;
- review the final diff for unintended changes;
- update .ai-memory/execution-state.md with state: completed.

If the completion gate has not passed:

- do not terminate;
- record the remaining work in execution-state.md;
- continue with the next action.
