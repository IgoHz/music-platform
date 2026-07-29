# Feature

## Goal

Extend the existing `albums` feature to support album-track associations while preserving the existing `/tracks` API and behavior.

## Requested Functionality

Implement the following capabilities:

1. Album creation supports initial track assignment.
2. Tracks reference their owning album via `albumId`.
3. Album deletion removes album references from associated tracks.
4. Existing albums can be extended with additional tracks after creation.

## Expected Behavior

### Album Creation

`POST /albums`

- accept optional `trackIds`
- create the album
- associate the provided tracks with the new album

### Album Deletion

`DELETE /albums/:id`

- delete the album
- remove `albumId` from all associated tracks

### Album Extension

Add an endpoint that allows attaching additional tracks to an existing album.

Example:

`PATCH /albums/:id/tracks`

The endpoint should associate the supplied tracks with the specified album.

## Constraints

Preserve:

- existing `/tracks` API
- existing track behavior
- backward compatibility

Prefer:

- additive changes
- existing repository patterns
- reusable logic
- minimal implementation risk

Avoid:

- domain redesign
- unnecessary abstractions
- duplicated business logic
- bidirectional module coupling

## Ownership

Albums own:

- album lifecycle
- orchestration of album-track associations

Tracks own:

- track lifecycle
- track persistence
- track schema

Dependency direction:

- reuse strategy from relation between "tracks" and "comments" modules

## Success Criteria

The feature is complete when:

- albums can be created with tracks
- tracks correctly store `albumId`
- deleting an album removes associated `albumId`
- tracks can be added to existing albums
- `/tracks` remains backward compatible
- module boundaries remain clear
- implementation follows existing project conventions