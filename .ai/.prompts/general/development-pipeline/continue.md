# continue

## Goal

Continue implementing the previously approved implementation plan from the current repository state.

Do not restart implementation.

## Source of Truth

Primary:

- current repository state

Secondary:

- approved implementation plan

Treat the repository as the authoritative record of implementation progress.

Follow the engineering philosophy defined in AGENTS.md and apply all relevant skills automatically.

## Resume

Before making changes:

- inspect the current repository state;
- determine which implementation steps are already complete;
- identify the next incomplete step;
- continue from that point.

If previous implementation differs from the original plan:

- determine whether the repository intentionally evolved;
- continue from the implemented state;
- avoid undoing existing work unless it is incorrect.

## Scope

Continue only the remaining approved work.

Do not:

- repeat completed work;
- restart previous phases;
- create a new implementation plan;
- redesign the architecture;
- expand the feature scope.

Only revisit previously completed work if the repository reveals an actual implementation problem.

## Implementation

Continue incrementally.

Keep changes:

- focused;
- reviewable;
- consistent with the existing implementation;
- consistent with the approved plan.

If implementation differs from the original plan because of repository changes:

- explain the reason;
- adapt accordingly;
- minimize deviation.

## Validation

Before finishing, verify:

- newly added code integrates correctly;
- existing functionality remains intact;
- no obvious type errors were introduced;
- completed implementation remains consistent.

## Output

### Completed Work

### Remaining Work

### Deviations From Plan (if any)

### Validation Performed