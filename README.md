# music-platform

A full-stack music platform prototype built with a **Next.js 16 frontend** and a **NestJS 11 backend**. The application lets users browse tracks, create new tracks with uploaded audio and cover art, view track details, leave comments, and play audio directly in the UI.

## Overview

This repository is a learning-oriented, prototype-grade music application inspired by music portals from the past. It demonstrates a split-package architecture where the **client** handles presentation, user interactions, and data hydration, while the **server** focuses on persistence, file handling, and API orchestration.

The main goals of the current implementation are:

- Centralized track listing and search
- Track creation with multipart uploads
- Track detail pages with comments
- In-browser audio playback and basic playback controls
- Clear separation between UI concerns and backend logic

## Architecture

### High-level layout

- `client/` — Next.js App Router application
- `server/` — NestJS REST API with MongoDB persistence
- Root workspace — shared documentation and licensing

### Frontend architecture

The client uses **Next.js App Router** and is organized around feature modules under `src/features/tracks/`.

#### Rendering and routing

- `src/app/` contains page-level route wrappers for:
  - `/tracks`
  - `/tracks/create`
  - `/tracks/details/[id]`
- The `Tracks`, `TrackDetails`, `TrackCreator`, and `TrackPlayer` feature components are composed into the routes.
- The track details flow uses a **parallel intercepting route** so `/tracks/details/[id]` remains a valid full-page route while the same content can also open as a modal overlay over `/tracks` via the `@modal` slot. The modal route is implemented in `src/app/tracks/(details)/@modal/(.)details/[id]/page.tsx` and is rendered through the shared `TrackDetails` component.

#### State and data flow

- **React Query** is used for async data fetching, caching, and invalidation.
  - `useTracksQuery` loads paginated/searchable track lists.
  - `useTrackByIdQuery` fetches a single track for the details page.
  - Mutations invalidate the relevant query keys after create, comment, or delete operations.
- **Zustand** manages local UI state for:
  - the multi-step track creation flow
  - the global audio player state (current track, volume, and playback status)
- **React Hook Form + Zod** are used for the track and comment forms.
- **Axios** is used as the HTTP client with a single shared API wrapper.

#### UI structure

- `src/components/` contains reusable UI primitives and layout elements.
- `src/features/tracks/components/` handles the domain-specific UI:
  - dashboard-style track list
  - create-track wizard
  - track details view
  - audio player footer

#### Server-side data hydration

The track list and detail pages prefetch data on the server using React Query, then hydrate the same cache on the client. This reduces loading time and keeps the UI responsive when navigating between pages.

### Backend architecture

The server is a **NestJS** application exposing a compact REST API with MongoDB persistence.

#### Modules and responsibilities

- `AppModule`
  - boots the app
  - configures MongoDB via `MongooseModule.forRoot`
  - serves static assets from the generated `static/` folder
  - imports `TracksModule` and `FilesModule`
- `TracksModule`
  - registers `Track` and `Comment` schemas
  - exposes `TracksController`
  - provides `TracksService`
  - injects `FilesService`
- `FilesModule`
  - provides `FilesService` for file persistence

#### API surface

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/tracks` | List tracks, optionally filtered by `query` and paginated with `offset` / `count` |
| `GET` | `/tracks/:id` | Fetch one track and populate its comments |
| `POST` | `/tracks` | Create a track with multipart `picture` and `audio` files |
| `POST` | `/tracks/comment` | Create a comment for a track |
| `POST` | `/tracks/listens/:id` | Increment the listen counter for a track |
| `DELETE` | `/tracks/:id` | Delete a track by ID |

#### Data model

- `Track`
  - `name`
  - `artist`
  - `text`
  - `listens`
  - `picture`
  - `audio`
  - `comments` (array of `Comment` ObjectIds)
- `Comment`
  - `username`
  - `text`
  - `track` (reference to a `Track`)

#### File handling

Uploaded files are written directly to the server filesystem under `server/src/static/<type>/`. The stored path is persisted in MongoDB as a string such as `picture/<uuid>.png` or `audio/<uuid>.mp3`.

### End-to-end flow

#### Creating a track

1. The user completes a three-step wizard in the client:
   - base metadata
   - picture upload
   - audio upload
2. The form state is kept in Zustand until submission.
3. The client sends a `multipart/form-data` request to `POST /tracks`.
4. `TracksController` receives both the JSON payload and uploaded files.
5. `FilesService` saves the files to disk and returns storage references.
6. `TracksService` creates the document in MongoDB.
7. The client invalidates the tracks query cache and navigates back to the list.

#### Listening to a track

1. Clicking a track in the list hydrates the global player store with the selected track metadata.
2. The player component loads the audio URL from the backend static asset path.
3. Playback controls update the store and HTML audio element state.
4. Track listens can be incremented by calling `POST /tracks/listens/:id`.

#### Reading and commenting on a track

1. The details page fetches a single track and its comments.
2. The comment form validates input locally and submits a payload to `POST /tracks/comment`.
3. The track query cache is invalidated so the updated comment list is refreshed.

## Technology analysis

### Frontend

- **Next.js 16** — App Router, server components, route-based rendering, and **parallel intercepting routes** for modal overlays
- **React 19** — UI rendering and hooks
- **TypeScript** — strong typing across the client and server
- **Tailwind CSS 4** — utility-first styling
- **@tanstack/react-query** — caching, hydration, invalidation, and background updates
- **Zustand** — lightweight global state for track creation and playback
- **react-hook-form + zod** — form state and schema validation
- **Axios** — HTTP abstraction for API calls

### Backend

- **NestJS 11** — modular backend framework with decorators and DI
- **Mongoose** — MongoDB ODM
- **@nestjs/mongoose** — model registration and connection management
- **@nestjs/platform-express** — multipart parsing and request handling
- **@nestjs/serve-static** — static file serving support
- **uuid** — generated file names

### Tooling

- **pnpm** — package manager for both client and server
- **ESLint** — linting
- **Prettier** — formatting
- **Jest** — backend testing support

## Project structure

### Root

- `README.md` — project overview and development documentation
- `LICENSE` — MIT license

### Client

- `src/app/` — route pages and root layout
- `src/components/` — shared UI primitives and reusable elements
- `src/features/tracks/` — feature modules for tracks, player, and creation flow
- `src/lib/` — shared helpers and utility functions
- `src/providers/` — React Query provider

### Server

- `src/app.module.ts` — root module and global configuration
- `src/tracks/` — track and comment controllers, services, DTOs, and schemas
- `src/files/` — file persistence logic
- `src/static/` — uploaded assets at runtime (created locally)

## Local development

### Prerequisites

- Node.js 18+
- pnpm
- MongoDB running locally on `mongodb://localhost:27017`

### Start the backend

```bash
cd server
pnpm install
pnpm run start:dev
```

The API will start on `http://localhost:4000` by default.

### Start the frontend

```bash
cd client
pnpm install
pnpm dev
```

The client will run on `http://localhost:3000` by default.

### Environment variables

The current implementation relies on defaults, but the following values are expected in the client/server environment if you want to override them:

- `CLIENT_URL` — allowed frontend origin for CORS; defaults to `http://localhost:3000`
- `PORT` — backend port; defaults to `4000`
- `NEXT_PUBLIC_BACKEND_URL` — used by the client to build static asset URLs; the local client config in `client/.env` is `http://localhost:4000/`

> The current backend uses a hardcoded MongoDB connection string: `mongodb://localhost:27017/music-platform`.

## Current implementation notes

- The client and server are intentionally split into separate packages for clean boundaries.
- File uploads are stored directly on disk instead of using cloud object storage.
- There is no authentication or authorization layer yet.
- Track deletion does not currently clean up the associated files on disk.
- The backend does not perform database-level validation beyond its current DTO shape and the client-side form validation.
- The application is prototype-focused, so production concerns like backups, upload quotas, CDN delivery, and database indexes are not yet implemented.

## Future improvements

- Add authentication and author ownership for tracks and comments
- Introduce a dedicated upload service or object storage integration
- Add file cleanup on delete and stronger validation for uploaded file types
- Add pagination and filtering polish on the client
- Add integration and end-to-end tests
- Improve metadata and SEO configuration in the Next.js app

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
