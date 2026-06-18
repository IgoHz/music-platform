# 🧭 FEATURE PIPELINE — Albums Module (Tracks Grouping)

## 🧠 PLAN

### Goal:
Introduce a new `albums` domain that groups existing `tracks` without breaking current track behavior or API contracts.

### Target outcome:
- New `albums` module (NestJS)
- Albums can contain multiple tracks
- `/albums` endpoint returns albums with optional track relations
- Tracks module remains fully backward-compatible
- No breaking changes to existing `/tracks` API

---

## Context:
Current system:
- `tracks` entity exists independently
- No grouping or parent entity
- No album concept in domain model

New requirement:
- Albums aggregate tracks (1 → many relationship)
- Tracks remain primary entities
- Album is a higher-level aggregation layer

---

## Constraints:
- DO NOT modify existing track behavior
- DO NOT change track API responses
- DO NOT redesign track schema
- DO NOT introduce unnecessary abstractions
- Prefer additive changes only

---

## 1. Understanding
- Identify current track ownership boundaries
- Determine where grouping logic will live (albums only)
- Define relationship direction (album → tracks)
- Ensure tracks remain standalone entities

---

## 2. Problems
- No existing aggregation layer for tracks
- Risk of coupling album logic into tracks module
- Potential duplication of track queries in album service
- Risk of overfetching / circular dependency (albums ↔ tracks)

---

## 3. Refactor Strategy (STRICT MINIMAL FEATURE ADDITION)

### Phase 1 — MODULE SETUP
- Create `albums` module (empty shell)
- Register module in root app
- No DB or logic changes yet

### Phase 2 — DATA MODEL EXTENSION
- Add `Album` schema/entity
- Add relation: Album → Track IDs (or references)
- DO NOT modify Track schema

### Phase 3 — DTO + INPUT LAYER
- Create `create-album.dto.ts`
- Define album creation with list of track IDs
- Validate track existence at service level

### Phase 4 — SERVICE IMPLEMENTATION
- Implement `albums.service.ts`
- Add:
  - create album
  - get album by id
  - list albums
- Ensure track resolution is read-only from tracks module

### Phase 5 — CONTROLLER + API
- Implement `/albums` controller
- Endpoints:
  - `POST /albums`
  - `GET /albums`
  - `GET /albums/:id`
- Ensure no change to `/tracks`

### Phase 6 — INTEGRATION SAFETY
- Wire module dependencies safely
- Ensure only albums depend on tracks (one-way)
- Validate no circular imports

---

## 4. Dependency Model

### Ownership:
- Albums module owns:
  - album schema
  - album service
  - album controller

- Tracks module owns:
  - track schema
  - track lifecycle
  - track API

### Allowed dependency direction:
```ts
albums → tracks (read-only)
tracks ❌ must NOT depend on albums