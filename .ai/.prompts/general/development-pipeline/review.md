# review

## Goal

Review the implementation against the previously approved implementation plan.

## REQUIRED SKILLS

This is a Review phase.

Required:

- execution-control
- code-review
- project-consistency
- mcp-usage

Load additional review/quality skills when applicable:

- testing
- performance
- architecture-review

## REQUIRED MCPS

Before reviewing, search the memory-engine MCP server for related decisions, bugs, and previous fixes. Use retrieved memories to identify regressions and consistency issues, but verify them against the current repository.

## Review Scope

Review the current repository state against:

1. approved implementation plan;
2. original requirements;
3. current execution checkpoint.

Do not reconstruct implementation history from the conversation unless
needed to resolve an unexplained deviation.

## Source of Truth

Specification:

- approved implementation plan

Implementation:

- current repository state

Follow AGENTS.md.

## Instructions

- compare implementation with the approved plan;
- inspect the actual repository state;
- focus on correctness, maintainability, consistency and architectural integrity;
- avoid redesign unless a genuine implementation problem is identified.

## Correctness

Verify that:

- requested functionality is implemented;
- behavior is correct;
- implementation is complete.

Identify:

- implementation bugs;
- incomplete work;
- inconsistent behavior.

## Plan Compliance

Compare the implementation against the approved plan.

Identify:

- completed work;
- missing work;
- deviations;
- unnecessary additions.

Treat the implementation plan as the specification.

## Architecture

Verify that implementation respects:

- existing architecture;
- ownership boundaries;
- dependency direction;
- established project conventions.

## Code Quality

Evaluate:

- readability;
- maintainability;
- consistency;
- simplicity;
- project conventions.

## Risks

Identify:

- regressions;
- edge cases;
- architectural risks;
- future maintenance concerns.

## Review Outcome

If findings exist:

- record them clearly;
- return execution to Fix;
- after fixes, run Review again.

Review is complete only when:

- no blocking findings remain;
- no incomplete approved requirements remain;
- the completion gate passes.

A successful fix does not by itself mean the feature is complete.

## Summary

Provide:

### Critical Issues

### Plan Deviations

### Risks

### Overall Assessment

### Confidence (0–10)