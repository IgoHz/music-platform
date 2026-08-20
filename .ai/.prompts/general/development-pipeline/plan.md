
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

## REQUIRED SKILLS

This is a planning session.

The following skills are required for the Plan phase:

- repository-analysis
- planning

For non-trivial architectural or multi-module work, also load:

- project-architecture
- project-consistency
- mcp-usage

Load when applicable:

- technology-evaluation
- api-design

Load these skills with the skill tool before beginning repository research.

Do not begin substantive repository research until the required skills
have been successfully loaded.

Do not assume that mentioning a skill name means its contents are loaded.

## REQUIRED MCPS

Before planning, search the memory-engine MCP server for relevant ADRs, decisions, bugs, and prior implementation context. Use the exact project name from config/projects.yaml. Do not modify code or memory files during planning.

────────────────────────────
MEMORY CONTEXT INITIALIZATION
────────────────────────────

For non-trivial tasks, before broad repository research:

1. Resolve the memory-engine project identity from its project registry.
2. Search the memory-engine for relevant architectural decisions,
   constraints, previous implementation findings, and known issues.
3. Use memory results only as historical/project context.
4. Treat the current repository as authoritative for current implementation
   state.
5. Do not store transient research progress in the memory-engine.

If the memory-engine is unavailable, continue only if the task can still
be safely planned from the repository. Record that memory context was
unavailable rather than repeatedly retrying it.

────────────────────────────
PLANNING EXECUTION LOOP
────────────────────────────

Planning is a continuous execution phase.

A completed tool call, completed subagent investigation, answered research
question, or intermediate research conclusion is NOT a stop condition.

After each research increment:

1. identify what has been established;
2. identify remaining required research;
3. identify contradictions or unknowns;
4. select the next highest-value research increment;
5. continue.

Do not stop merely because a plausible implementation plan could already
be written.

The Plan phase may terminate only when ALL of the following are true:

- mandatory skills are loaded;
- required memory context has been initialized or explicitly marked
  unavailable;
- repository research completion criteria are satisfied;
- material contradictions are resolved;
- material unknowns are classified;
- clarification requirements are resolved;
- final research-to-plan consistency check is complete;
- the final implementation plan has been produced.


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

## RESEARCH → PLANNING HANDOFF

Before producing the implementation plan:

1. Verify that the required Plan skills have been loaded.
2. Verify that repository research completion criteria are satisfied.
3. Synthesize the repository findings.
4. Resolve material contradictions in research findings.
5. Classify remaining unknowns as:
   - resolvable by further repository inspection;
   - user clarification required;
   - non-blocking assumption.
6. Re-load or confirm the `planning` skill is active.
7. Only then construct the implementation plan.

Do not produce the final plan directly from raw repository exploration.

────────────────────────────
RESEARCH → PLANNING HANDOFF
────────────────────────────

Before entering the final planning stage:

1. Verify that repository-analysis completion criteria are satisfied.
2. Synthesize repository findings.
3. Resolve material contradictions.
4. Classify remaining unknowns as:
   - repository-resolvable;
   - clarification-required;
   - non-blocking assumption.
5. Confirm that the planning skill is loaded.
6. Perform the final research-to-plan consistency check.
7. Only then construct the final implementation plan.

Do not generate the final plan directly from raw subagent output.

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

## Research Delegation

Use subagents for independent repository investigations when they provide
meaningful parallelism.

Avoid overlapping broad repository scans.

Each research task must have:

- a clearly bounded question;
- a defined repository scope;
- a concrete output;
- no unnecessary full-file dumps.

Prefer focused investigations such as:

- affected feature/domain;
- closest analogous implementation;
- API/persistence path;
- tests and validation;
- architectural boundaries.

Do not ask multiple subagents to rediscover the same repository structure.

## Research Efficiency

Prefer focused repository investigations over repeated broad scans.

Before starting a research increment, define:

- question;
- target scope;
- expected evidence.

Once a research question is conclusively answered, mark it resolved.

Do not re-investigate a resolved question unless later evidence contradicts
the conclusion.

Do not request complete file contents from subagents unless the complete
file is specifically required.

Prefer returning:

- relevant paths;
- exports;
- structure;
- important behavior;
- dependencies;
- conventions;
- short exact snippets where necessary.

Avoid returning complete files by default.

Do not launch overlapping subagent investigations covering substantially
the same question.

────────────────────────────
EXECUTION HANDOFF
────────────────────────────

The final implementation plan will be consumed by Build.

The plan MUST use:

- stable step identifiers;
- clear sequential ordering;
- explicit dependencies;
- explicit validation for each major step.

The persistent checkpoint is:

`.ai-memory/execution-state.md`

The checkpoint is phase-aware.

Plan may create or update this file with:

`phase: planning`

when the task is large enough that interruption/recovery is likely.

Before handing work to Build, update it to:

`phase: build-ready`

Build will then take ownership of the implementation state.

The checkpoint must remain compact and operational. It must contain enough
information for a fresh continuation to identify the current phase,
completed work, current work, next action, relevant files, and known
blockers without reconstructing the previous conversation.

