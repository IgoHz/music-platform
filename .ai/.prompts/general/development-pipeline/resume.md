# resume

## Goal

Recover an interrupted or stale implementation session from the current
repository state.

Assume that conversational context may be incomplete or unreliable.

## Recovery Order

1. Read `/.ai-memory/execution-state.md` if present.
2. Inspect `git status`.
3. Inspect the current diff.
4. Inspect the approved implementation plan.
5. Verify the execution checkpoint against the repository.
6. Resolve discrepancies using repository evidence.
7. Determine the next incomplete implementation increment.
8. Rewrite stale execution-state.md if necessary.
9. Continue implementation.

Do not reconstruct the entire previous conversation when repository state and execution-state.md provide sufficient information.

## Primary objective

Recover the current implementation state and continue from the first incomplete required work.

Continue until:

- the feature is complete;
- a genuine blocker requires user input;
- an unrecoverable environment/tool problem prevents progress; or
- the user explicitly asks you to stop.

## Recovery procedure

First establish:

1. What the approved task requires.
2. What the implementation plan requires.
3. What is currently present in the repository.
4. Which planned items are already complete.
5. Which planned items are partially implemented.
6. Which planned item should be executed next.
7. Whether there are existing validation failures that affect the current work.

Use the repository as the primary source of truth.

Use previous conversation/session information only as supporting context.

When previous execution state conflicts with the repository:

- trust the repository;
- verify the relevant files;
- update the execution state accordingly.

## Avoid restart behavior

Do NOT:

- redo the original repository analysis;
- recreate the implementation plan;
- inspect the entire repository without a concrete reason;
- reimplement completed work;
- assume that the previous session's last message represents the actual repository state;
- assume that an item is incomplete merely because the previous session said it was incomplete.

Instead, verify only the minimum necessary state.

## Recovery state

Create a compact internal state:

### Resume State

- Task:
- Plan:
- Completed:
- Partially implemented:
- Remaining:
- Current increment:
- Known issues:
- Validation status:
- Next action:

Then immediately execute the next action.

Do not stop after producing this state.

## Execution loop

After recovering state, continue autonomously:

1. Select the first incomplete meaningful increment.
2. Inspect the minimum required context.
3. Implement it.
4. Validate it.
5. Fix validation or implementation failures.
6. Update the execution state.
7. Continue with the next increment.

Repeat until completion or a genuine stop condition occurs.

A completed increment is a checkpoint, NOT a reason to stop.

## Error recovery

Treat ordinary tool and implementation failures as recoverable by default.

If a tool call fails:

1. inspect the failure;
2. correct the invocation;
3. retry.

If implementation fails validation:

1. diagnose the root cause;
2. fix it;
3. rerun validation;
4. continue.

Do not stop merely because the previous implementation was incorrect.

## Scope control

Use focused investigation.

For the current increment, inspect:

- directly affected files;
- analogous files when necessary;
- relevant types/API contracts;
- relevant tests/configuration.

Do not repeatedly perform broad repository scans unless evidence shows that the current state is inconsistent or insufficient.

## Validation

Use incremental validation throughout execution.

At the end, perform the complete validation required by the implementation plan.

Do not declare the feature complete while:

- required plan items remain unfinished;
- known validation failures remain;
- affected imports or exports are broken;
- required routes/components/hooks are missing;
- implementation is only partially wired.

## Completion gate

Declare completion only after:

- all requested behavior is implemented;
- all plan items are accounted for;
- relevant validation passes;
- no known blocking implementation issues remain;
- the final diff is consistent with repository conventions.

## Stop conditions

Stop only if:

1. The task is complete and passes the completion gate.
2. A material user decision is required.
3. An unrecoverable external/environment blocker prevents progress.
4. A destructive or risky action requires confirmation.
5. The user explicitly asks you to stop.

Otherwise, continue implementation.