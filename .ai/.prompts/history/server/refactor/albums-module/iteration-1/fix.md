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