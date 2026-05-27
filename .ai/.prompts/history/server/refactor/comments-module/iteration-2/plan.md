Goal:
Refactor "tracks" module by extracting all comment-related logic into a dedicated "comments" module in NestJS.

Target outcome:
- comments becomes an independent NestJS module
- owns: schema, dto, controller, service for comments
- tracks module remains focused only on track logic
- API behavior and endpoints remain unchanged

Context:
Comment logic is currently embedded inside tracks module:
- DTOs and schema live under tracks
- service contains mixed responsibilities
- controller handles both track and comment operations

Files:
- src/tracks/dto/create-comment.dto.ts
- src/tracks/schemas/comment.schema.ts
- src/tracks/tracks.controller.ts
- src/tracks/tracks.service.ts
- src/tracks/tracks.module.ts

Constraints:
- preserve runtime behavior exactly
- preserve API contracts
- preserve data models and schemas
- preserve current tracks module structure style
- no redesign of domain model
- no new abstractions

Planning Rules:
- prefer phased incremental migration
- separate structural extraction from logic extraction
- preserve stable repository state between phases
- minimize simultaneous mutation scope
- avoid speculative redesigns
- prefer operationally safe migration order

Tasks:

1. Understanding
- Identify responsibilities of tracks vs comment logic
- Identify ownership leaks
- Identify coupling points

2. Problems
- Describe boundary violations
- Identify dependency risks
- Identify migration risks
- Identify stale ownership concerns

3. Refactor Strategy (STRICT MINIMAL MIGRATION)
- Define smallest safe extraction order
- Separate structural moves from behavioral moves
- Ensure comments module exists before migration
- Keep tracks module operational during all phases
- Prefer additive migration before cleanup

IMPORTANT:
Do NOT redesign architecture.
Do NOT propose abstraction improvements.
Only propose safe migration steps.

4. Dependency Model
- Define ownership boundaries
- Ensure comments module owns comment domain fully
- Define allowed dependency direction
- Prevent circular dependencies

5. Risks
- API regressions
- import/export breakage
- stale references
- partial migration states
- NestJS module wiring failures

6. Validation Strategy
- confirm no behavior changes
- validate imports/exports
- validate module separation
- validate dependency direction
- validate route preservation

Output:

## Understanding
## Problems
## Refactor Plan (Minimal Migration Steps)
## Dependency Model
## Risks
## Validation Strategy