# react-template

A personal React starter template built with modern tooling, file-based routing, and a component system based on Material Design 3.

![Version](https://img.shields.io/github/v/tag/soyaaroncervantes/react-template?label=version)
![License](https://img.shields.io/github/license/soyaaroncervantes/react-template)

## Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev) + [TypeScript 6](https://www.typescriptlang.org) |
| Build | [Vite 8](https://vite.dev) |
| Routing | [TanStack Router](https://tanstack.com/router) (file-based) |
| Server state | [TanStack Query](https://tanstack.com/query) |
| HTTP client | [superagent](https://github.com/ladjs/superagent) + [superagent-prefix](https://github.com/johntron/superagent-prefix) |
| Client state | [Zustand](https://zustand.docs.pmnd.rs) + [zustand-slices](https://github.com/zustandjs/zustand-slices) |
| UI / Design system | [@m3e/react](https://github.com/soyaaroncervantes/m3e) (Material Design 3) |
| Linting & formatting | [Biome](https://biomejs.dev) |
| Testing | [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com) |
| Package manager | [Bun](https://bun.sh) |

## Getting started

```bash
bun install
bun dev
```

## Scripts

| Command | Description |
|---|---|
| `bun dev` | Start the dev server |
| `bun build` | Type-check and build for production |
| `bun preview` | Preview the production build |
| `bun test` | Run tests |
| `bun test:ui` | Run tests with the Vitest UI |
| `bun test:coverage` | Run tests with coverage |
| `bun lint` | Lint `src/` with Biome |
| `bun format` | Format `src/` with Biome |
| `bun check` | Lint + format `src/` with Biome |

## Project structure

```
src/
├── core/
│   ├── app.tsx           # Entry point — router + React root
│   ├── clients/          # HTTP client (http-client.ts, api.stores.ts)
│   ├── layouts/          # Reusable layout components (BaseLayout)
│   ├── providers/        # AppProvider, QueryProvider, StoreProvider, ThemeProvider
│   ├── routes/           # File-based routes (__root, _rootLayout)
│   └── stores/           # Zustand store setup (app.store, devtools.store)
├── features/
│   └── theme/
│       ├── components/   # Theme component system (Card, Text, Icon, Button)
│       ├── theme.module.css
│       └── theme.stores.ts
└── shared/
    └── base.types.ts
```

## Theme components

Components are exposed through a single `Theme` namespace:

```tsx
import { Theme } from '@/features/theme/components'

<Theme.Text variant="display" size="large">Hello</Theme.Text>
<Theme.Button>Click me</Theme.Button>
<Theme.Icon>home</Theme.Icon>

<Card>
  <Card.Header>Title</Card.Header>
  <Card.Content>Body</Card.Content>
  <Card.Footer>Footer</Card.Footer>
  <Card.Actions>Actions</Card.Actions>
</Card>
```

## HTTP client

HTTP requests are made with `superagent`. The `createApiClient` factory creates a typed `Agent` with optional domain prefix via `superagent-prefix`.

```ts
import { createApiClient } from '@/core/clients/http-client'

const client = createApiClient('https://api.example.com')
const res = await client.get('/users').query({ page: 1 })
```

Clients are stored in Zustand via `apiClientsSlice` and accessed with the `useApiClients` hook:

```ts
import { useApiClients } from '@/core/clients/api.stores'

const { add, getClient, remove } = useApiClients()

const domain = 'https://api.example.com'
add(domain)
const client = getClient(domain)
```

## Releases

Releases follow [Conventional Commits](https://www.conventionalcommits.org). Tags are pushed manually and GitHub Actions automatically publishes a GitHub Release with generated notes.

To create a new release, follow the Windsurf workflow at `.windsurf/workflows/release.md`.
