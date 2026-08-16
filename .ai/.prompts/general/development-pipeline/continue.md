# continue

## Goal

Resume the interrupted implementation and continue until the approved scope
is complete or a valid stop condition is reached.

A previous model turn ending is not evidence of task completion.

## REQUIRED SKILLS

Before recovery:

- execution-control
- feature-development
- incremental-development
- project-consistency

Load them before substantive recovery or implementation.

## Recovery Order

Before making changes:

1. Read `/.ai-memory/execution-state.md`.
2. Inspect `git status` and the relevant diff.
3. Inspect the current repository state.
4. Compare repository state with execution-state.md.
5. Compare both with the approved implementation plan.
6. Identify the first incomplete or inconsistent increment.
7. Update execution-state.md if necessary.
8. Continue implementation.

Repository state is authoritative over stale execution-state claims.

## Continuation Rule

Do not stop merely because:

- the previous increment was completed;
- the previous model turn ended;
- a validation checkpoint was reached;
- a recoverable tool error occurred;
- additional in-scope work was discovered.

Continue until a valid stop condition is reached.

## Primary objective

Continue implementing the approved plan until:

- the feature is complete;
- a genuine blocker requires user input;
- an unrecoverable environment/tool problem prevents progress; or
- the user explicitly asks you to stop.

Do NOT stop merely because:

- the current implementation increment is complete;
- a checkpoint has been reached;
- validation was performed;
- a problem was discovered;
- a tool call failed;
- additional repository inspection is needed;
- you need to fix an implementation mistake;
- you have summarized the current progress.

A checkpoint is NOT a stop condition.

## State reconstruction

Before taking action, establish the minimum current state required to continue:

1. Inspect the current repository state.
2. Review the approved implementation plan.
3. Identify which plan items are already implemented.
4. Identify the current incomplete implementation increment.
5. Identify the next concrete action.
6. Verify important previous claims against the repository when necessary.

Use the current repository state as the primary source of truth.

Do not trust previous model claims about files, implementations, or completion status when the repository can verify them.

Do NOT repeat broad repository analysis if the existing state and plan already provide sufficient information.

Only investigate additional areas when:
- the current state contradicts previous findings;
- the next implementation step requires information not yet established;
- a validation failure requires investigation; or
- a material implementation uncertainty has appeared.

## Execution loop

Continue using this loop autonomously:

1. Select the smallest meaningful incomplete implementation increment.
2. Inspect only the code and context required for that increment.
3. Implement the increment.
4. Validate the changed behavior.
5. Fix issues discovered during validation.
6. Update the internal execution state:
   - completed work;
   - current increment;
   - remaining work;
   - known issues;
   - next action.
7. If work remains, immediately continue with the next increment.

Do not return control to the user between normal increments.

## Error recovery

Recover from ordinary implementation and tool failures automatically.

If a tool call fails:

1. Determine whether the failure is recoverable.
2. Correct the command, path, arguments, or approach.
3. Retry.
4. Continue execution.

Examples of recoverable failures:

- wrong file path;
- incorrect tool arguments;
- failed search command;
- missing import;
- type error;
- lint error;
- test failure;
- implementation mismatch;
- incorrect assumption about an existing file.

A recoverable failure is NOT a stop condition.

If a failure reveals that an earlier implementation decision was incorrect:

1. identify the root cause;
2. repair the implementation;
3. revalidate;
4. continue.

Stop only when the problem genuinely cannot be resolved without user input or external intervention.

## Execution state

Maintain a compact internal execution state throughout the build:

### Execution State

- Plan progress:
  - completed:
  - in progress:
  - remaining:
- Current increment:
- Current issue:
- Next action:
- Validation status:
- Blocking decision:

Keep this state concise.

Do not repeatedly reconstruct the entire repository or implementation history.

## Validation

Validate continuously, but treat validation as a checkpoint rather than a termination point.

After an increment:

- run the narrowest relevant validation;
- fix failures;
- continue.

At meaningful feature boundaries:

- run broader relevant validation;
- fix failures;
- continue.

Before declaring the overall task complete, perform the final validation required by the plan.

## Completion gate

Do not declare completion until:

- every required plan item is implemented;
- affected imports and module wiring are valid;
- relevant typechecking/linting/tests pass;
- known implementation issues are resolved;
- no required feature slice is still incomplete;
- the final implementation is consistent with the repository patterns;
- the final diff has been reviewed for unintended changes.

If any completion criterion fails, continue implementation.

## Stop conditions

Stop only when one of these is true:

1. The implementation is complete and passes the completion gate.
2. A material ambiguity requires a user decision and cannot be resolved from repository evidence.
3. An external dependency or environment problem genuinely prevents further progress.
4. Continuing would require a destructive/risky action that requires user confirmation.
5. The user explicitly asks you to stop.

Otherwise, continue working.