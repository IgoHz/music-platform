────────────────────────────
EXECUTION MODE
────────────────────────────

Mode: autonomous

Execute the approved implementation plan continuously until:

- the task is complete;
- a genuine blocker requires user input;
- a risky/destructive action requires confirmation;
- or an unrecoverable environment failure prevents progress.

Do not wait for user confirmation between implementation increments.

A completed increment is a checkpoint, not a stopping point.

Do not stop merely because:

- an increment is complete;
- validation passed;
- a bug was discovered;
- a previous assumption was incorrect;
- additional repository inspection is required;
- a tool call failed;
- a subtask completed;
- the current implementation needs correction.

Recover locally solvable problems and continue.

After each increment:

1. validate;
2. update execution state;
3. determine the next incomplete increment;
4. continue automatically.

Perform periodic broader validation during long-running work.

Only stop when a valid stop condition is reached.