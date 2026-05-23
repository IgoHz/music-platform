# music-platform

A full-stack music platform prototype with a Next.js frontend and a NestJS backend for managing tracks, file uploads, comments, and audio playback data.

## What this project contains

- `client/` — A Next.js 13 application with a modern UI, reusable components, and track management features.
- `server/` — A NestJS application with MongoDB-backed track storage, file upload handling, audio and picture serving, and track comment support.
- Modular frontend features for track listing, creation, details, and playback controls.
- API routes for track CRUD, comment creation, listen counter updates, and file uploads.
- A clear separation between frontend UI and backend API logic for easy local development.

## Why this repo exists

This repository is intended as a working prototype for a music-focused platform and a tribute to the music web portals that inspired me in childhood. It was also developed using an AI-driven architecture flow, including local AI memory in `client/.ai-memory`, component generation, behavior planning, and troubleshooting analysis. It demonstrates how to build a full-stack application using:

- Next.js for client-side and server-side rendered pages
- NestJS for backend API design and request handling
- MongoDB for persistent track and comment storage
- File uploads for audio and cover images
- Modular architecture with independent client and server packages

## Project structure

- `/` — Root workspace containing the project README and two application packages.
- `client/` — Next.js frontend package
  - `src/app/` — App router pages and layout
  - `src/components/` — Shared UI components
  - `src/features/tracks/` — Track listing, creation, player, and detail features
  - `src/lib/` — Utility helpers and shared logic
  - `src/providers/` — React Query provider setup
- `server/` — NestJS backend package
  - `src/app.module.ts` — Root module configuring MongoDB and static file serving
  - `src/tracks/` — Track controller, service, DTOs, and Mongoose schemas
  - `src/files/` — File upload and static file handling

## Setup and usage

### Client

```bash
cd client
pnpm install
pnpm dev
```

### Server

```bash
cd server
pnpm install
pnpm run start:dev
```

The backend uses MongoDB at `mongodb://localhost:27017/music-platform` by default.

## Notes

- This repo is a prototype and learning-focused rather than a production deployment.
- Frontend and backend are intentionally split into separate packages for clear development boundaries.
- The backend supports audio and picture uploads, comments, and listen count tracking.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
