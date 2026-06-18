Goal:
Introduce a new `albums` domain that groups existing `tracks` without breaking current track behavior or API contracts.

Target outcome:
- New `albums` module (NestJS)
- Albums can contain multiple tracks
- `/albums` endpoint returns albums with optional track relations
- Tracks module remains fully backward-compatible
- No breaking changes to existing `/tracks` API

Context:
Current system:
- tracks entity exists independently
- no album concept exists

New requirement:
- albums aggregate tracks
- tracks remain standalone entities
- album is a higher-level grouping layer

Constraints:
- preserve existing track behavior
- preserve existing track API contracts
- prefer additive changes
- avoid unnecessary abstractions
- do not redesign the domain

Tasks:

## Understanding
- Identify current track ownership boundaries
- Define album ownership
- Determine relationship direction
- Ensure tracks remain independent

## Problems
- Identify missing aggregation layer
- Identify dependency risks
- Identify coupling risks
- Identify future migration risks

## Refactor Strategy

Phase 1 — Module Setup
- Create albums module
- Register module
- No schema or logic changes

Phase 2 — Data Model
- Create Album schema/entity
- Define album → tracks relationship
- Do not modify Track schema

Phase 3 — DTO Layer
- Create album DTOs
- Define validation rules

Phase 4 — Service Layer
- Implement album business logic
- Keep dependency on tracks read-only

Phase 5 — Controller Layer
- Implement routes
- Preserve `/tracks`

Phase 6 — Integration
- Wire module graph
- Prevent circular dependencies

## Dependency Model

Albums module owns:
- schema
- dto
- service
- controller

Tracks module owns:
- track lifecycle
- track API
- track schema

Allowed dependency direction:

albums → tracks

Forbidden:

tracks → albums

## Risks

- circular dependencies
- stale references
- import breakage
- partial implementations
- API regressions

## Validation Strategy

Verify:
- `/tracks` unchanged
- `/albums` behaves correctly
- dependency direction remains valid
- no circular imports
- module graph remains healthy

Do not propose architecture redesigns.

Output:

## Understanding
## Problems
## Refactor Plan
## Dependency Model
## Risks
## Validation Strategy