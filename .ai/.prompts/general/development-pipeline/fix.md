# fix

## Goal

Address the issues identified during the previous review.

## Source of Truth

Primary:

- review findings

Secondary:

- current repository state

Follow the engineering philosophy defined in AGENTS.md and apply all relevant skills automatically.

## Scope

Fix only the reported issues.

Do not:

- redesign the architecture;
- create a new implementation plan;
- expand the feature scope;
- perform unrelated refactoring;
- revisit previously accepted decisions.

Only reconsider a previous decision if the repository or review proves it to be incorrect.

## Execution

Fix all reported issues within the approved scope.

For each issue:

1. verify the current repository state;
2. determine the root cause;
3. implement the smallest appropriate fix;
4. validate the fix;
5. update `/.ai-memory/execution-state.md`.

Do not stop after the first successful fix if additional reported issues
remain.

After all fixes are applied, return to Review rather than declaring the
overall task complete.

## Analysis

Before making changes:

- inspect the affected code;
- understand each reported issue;
- determine whether it is:
  - an implementation bug;
  - incomplete implementation;
  - unintended regression;
  - incorrect review finding;
- identify the smallest safe fix.

If a review finding is incorrect:

- explain why;
- do not implement unnecessary changes.

## Implementation

Implement only the minimal changes required.

Preserve:

- existing architecture;
- project conventions;
- module boundaries;
- unrelated behavior.

Prefer:

- focused diffs;
- isolated fixes;
- incremental validation.

Avoid unrelated improvements.

## Validation

Before finishing, verify:

- each reported issue has been addressed;
- no new regressions were introduced;
- existing functionality remains intact;
- project conventions are preserved;
- no obvious type errors were introduced.

## Output

### Fixed Issues

### Remaining Issues (if any)

### Validation Performed