# Feature

## Goal

Implement a new `albums` page in the client that behaves similarly to the existing `tracks` page, while following the current app architecture, routing conventions, and UI patterns.

## Requested Functionality

Implement the following capabilities:

1. Add an albums listing page at `/albums` with a similar layout to `/tracks`.
2. Provide album search/filtering behavior comparable to the tracks search experience.
3. Add an album creation flow accessible from the albums page.
4. Add album details support so albums can be opened from the list in either a modal or a dedicated page.
5. Reuse the existing client patterns for data fetching, hydration, and feature organization.
6. Connect the new client albums experience to the existing albums routes implemented in the sibling `server` project, using the server-side endpoints as the source of truth for album data and operations.

## Expected Behavior

### Albums Listing Page

`GET /albums`

- render a page with a title, search UI, and a Create button
- display albums in a list similar to the tracks list experience
- use the existing query/data-fetching pattern already used by the tracks feature

### Search

- provide a search input on the albums page
- allow users to filter albums using a query parameter or equivalent behavior consistent with tracks

### Album Creation

- add a creation entry point from the albums page
- support a create flow that allows users to add a new album
- the album creation accordion should differ from the track creation flow
- allow the user to choose existing tracks during album creation so those tracks are attached to the newly created album
- after successful creation, the album should appear in the list

### Album Details

- allow users to open an album from the list
- show album details in a modal or dedicated page view
- provide a clear way to return to the albums list

## Constraints

Preserve:

- existing Next.js app structure and route conventions
- existing UI component library and styling patterns
- existing API wrapper and TanStack Query usage
- current overall behavior of the tracks page
- the existing client-server boundary, where the client consumes the albums endpoints from the sibling `server` application

Prefer:

- additive changes
- reuse of the existing tracks feature structure where appropriate
- minimal duplication and clear module boundaries
- implementation aligned with existing project conventions

Avoid:

- introducing a new state-management approach for this feature
- over-engineering the UI
- duplicating track-specific logic without adapting it for albums

## Ownership

Albums page owns:

- albums listing UI
- album search experience
- album create flow
- album details experience

Reuse strategy:

- mirror the structure and conventions of the existing tracks feature module rather than introducing a new pattern.

## Success Criteria

The feature is complete when:

- `/albums` exists and behaves like a first-class page in the app
- users can browse, search, create, and view albums
- the implementation follows the current tracks-page patterns closely
- the new albums experience integrates cleanly with the existing client architecture