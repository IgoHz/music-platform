Goal:
Refactor current "tracks" entity by extracting comment-related functionality into a separate "comments" module.

Target outcome:
- "comments" becomes a standalone NestJS module with its own:
  - schema
  - dto
  - controller
  - service
- "tracks" module retains ownership of track logic only
- relationship between tracks and comments is preserved via clean module boundaries
- existing API behavior remains unchanged

Context:
Current implementation mixes comment logic into the tracks domain layer, resulting in:
- cross-domain coupling between tracks and comments
- shared responsibility in service and controller layers
- schema and DTO definitions located under tracks module
- unclear module ownership boundaries

Files involved:
- src/tracks/dto/create-comment.dto.ts
- src/tracks/schemas/comment.schema.ts
- src/tracks/tracks.controller.ts
- src/tracks/tracks.service.ts
- src/tracks/tracks.module.ts

Important constraint:
- The current structure of the "tracks" module must be preserved as a reference pattern for the new "comments" module.

Requirements:
- preserve behavior exactly
- preserve all existing API endpoints and responses
- preserve data models and schema definitions (no semantic changes)
- preserve existing module patterns used in "tracks"
- avoid introducing new abstractions or architectural layers
- avoid redesigning the domain model
- prefer structural separation over logic rewriting

Tasks:

1. System Understanding
- Describe current responsibility distribution between tracks and comment logic
- Identify where comment-related logic leaks into tracks module
- Identify ownership ambiguity between modules

2. Architectural Problems
- Identify coupling points between tracks and comment logic
- Identify violations of module boundaries
- Identify duplicated or misplaced responsibilities
- Identify risks caused by shared schema/service/controller logic

3. Refactor Strategy (MINIMAL CHANGE APPROACH)
- Propose a step-by-step migration plan
- Ensure comment logic is extracted WITHOUT changing business behavior
- Define clear boundaries:
  - what moves to comments module
  - what stays in tracks module
- Ensure migration is incremental and reversible

IMPORTANT:
Do NOT propose a full redesign. Only propose a migration strategy.

4. Dependency & Module Design
- Define how tracks and comments modules should interact
- Specify dependency direction (who owns what)
- Ensure no circular dependencies are introduced
- Ensure NestJS module wiring remains simple and explicit

5. Risks & Regression Points
- Identify behavioral risks during extraction
- Identify API compatibility risks
- Identify data model inconsistencies that may appear during migration
- Identify module wiring risks (imports/exports issues)

6. Validation Strategy
- How to verify no behavior change occurred
- How to validate API stability
- How to validate module separation correctness
- What should be tested after migration

Output format:

## Understanding
...

## Problems
...

## Refactor Plan (Minimal Migration Strategy)
1.
2.
3.

## Dependency Model
...

## Risks
...

## Validation Strategy
...