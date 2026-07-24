# Plan

## Goal

Analyze the requested feature against the actual repository and produce a practical, repository-specific implementation plan.

## Operating Rules

- Follow the engineering philosophy defined in `AGENTS.md`.
- Perform deep repository research before producing the final plan.
- Do not begin implementation.
- Do not rely on the feature description alone for architectural decisions.
- Treat repository code as the source of truth for existing architecture and conventions.
- Apply relevant skills, but do not skip mandatory repository analysis because of skill selection.

## Mandatory Research Phase

Before writing the plan:

1. Inspect the repository structure.
2. Identify all directly affected modules.
3. Trace the existing implementation of each affected domain.
4. Inspect relevant schemas, DTOs, controllers, services, repositories, and persistence models.
5. Inspect module boundaries and dependency injection.
6. Find and inspect the closest analogous existing implementation.
7. Inspect relevant tests and validation patterns.
8. Identify reusable abstractions and conventions.
9. Identify architectural inconsistencies or constraints.
10. Determine which requirements are ambiguous or cannot be safely inferred.

If the requested feature explicitly references an existing implementation as a model, that implementation MUST be inspected before the plan is finalized.

Do not stop repository research merely because enough information exists to write a plausible plan.
Continue until the implementation approach can be justified by concrete repository evidence.

## Clarification Gate

Before producing the final plan:

- Ask focused questions if unresolved ambiguity materially changes the implementation.
- Do not ask questions that can be answered by inspecting the repository.
- If no clarification is required, state that the repository provides sufficient evidence to proceed.

## Plan Output

## Understanding

Summarize:

- requested functionality;
- constraints;
- success criteria;
- assumptions.

## Repository Research

Document:

- relevant modules;
- architecture and dependency boundaries;
- existing analogous implementations;
- reusable patterns;
- relevant API and persistence conventions;
- testing conventions.

For important findings, distinguish:

- Observed;
- Inferred;
- Unknown.

## Architectural Assessment

Explain:

- how the requested feature fits the current architecture;
- which existing patterns should be reused;
- whether the requested dependency direction is compatible with the repository;
- alternatives considered;
- recommended approach and rationale.

## Risks and Open Questions

Identify:

- implementation risks;
- dependency concerns;
- migration considerations;
- edge cases;
- architectural inconsistencies;
- unresolved questions.

## Implementation Plan

Break the work into small sequential implementation steps.

Each step must include:

- objective;
- affected module/file area;
- existing pattern being reused;
- intended change;
- dependencies;
- validation.

Prefer:

- incremental delivery;
- vertical feature slices;
- minimal implementation risk;
- reviewable changes.

## Validation Strategy

Describe:

- unit tests;
- integration/API tests;
- regression tests;
- edge cases;
- backward compatibility verification.

## Research Completion Check

Before finalizing, verify that you have:

- [ ] inspected affected modules;
- [ ] inspected analogous implementations;
- [ ] inspected architectural boundaries;
- [ ] inspected relevant tests;
- [ ] identified reusable patterns;
- [ ] identified risks and ambiguities;
- [ ] justified the implementation approach from repository evidence.