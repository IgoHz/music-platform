# fix

## Goal

Address the issues identified during the previous review.

## Source of Truth

Primary:

- review findings

Secondary:

- current repository state

Follow the engineering philosophy defined in AGENTS.md.

## Required Skills

Mandatory:

- execution-control
- debugging
- feature-development
- incremental-development
- project-consistency

Conditional:

- testing
- technology-specific skills
- architecture
- performance
- api-design

Load mandatory skills before investigation or modification.

A skill is loaded only after a successful `skill` tool call.

## Recovery Scope

Fix only the identified problem.

Do not reconstruct the entire feature.

Use:

1. current repository state;
2. current validation output;
3. execution checkpoint;
4. approved plan;
5. relevant memory-engine context.

Do not use conversation history as the primary source of implementation
state.

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
5. update `.ai-memory/execution-state.md`.

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

