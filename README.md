# Next.js Tutorial Project

Learn Next.js by implementing real components and API routes. Each lesson has `// TODO` comments guiding you through the concept.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Lessons

| # | Lesson | Tag | File(s) to edit |
|---|--------|-----|-----------------|
| 01 | Server Components | frontend | `app/lessons/01-server-component/ServerGreeting.tsx` |
| 02 | Client Components | frontend | `app/lessons/02-client-component/Counter.tsx` + `ToggleBox.tsx` |
| 03 | Data Fetching | frontend | `app/lessons/03-data-fetching/PostList.tsx` |
| 04 | Routing & Params | frontend | `app/lessons/04-routing/[id]/page.tsx` |
| 05 | Route Handlers | **backend** | `app/api/todos/route.ts` |
| 06 | Full-Stack Todo | **full-stack** | `app/lessons/06-fullstack-todo/TodoApp.tsx` |

> Do lessons 05 → 06 in order. Lesson 06 calls the API you build in 05.

---

## Key Concepts

### Server vs Client Components

| | Server | Client |
|---|---|---|
| Default? | ✅ Yes | ❌ Needs `"use client"` |
| Can be async? | ✅ Yes | ❌ No |
| useState / hooks? | ❌ No | ✅ Yes |
| Event handlers? | ❌ No | ✅ Yes |
| Access DB/secrets? | ✅ Yes | ❌ No |

### Data Fetching

```tsx
// Cached (SSG-style)
const res = await fetch(url);

// Fresh every request (SSR-style)
const res = await fetch(url, { cache: "no-store" });

// Revalidate every N seconds (ISR-style)
const res = await fetch(url, { next: { revalidate: 60 } });
```

### Route Handlers

```ts
// app/api/todos/route.ts  →  handles /api/todos
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ todos: [] });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json(body, { status: 201 });
}
```

### Dynamic Routes

```
app/lessons/04-routing/[id]/page.tsx
                        ^^^^
                        Becomes params.id
```

```tsx
export default function Page({ params }: { params: { id: string } }) {
  console.log(params.id); // "1", "2", etc.
}
```

### Full-Stack Pattern

```
page.tsx (Server Component)
  └─ reads DB / in-memory store directly
  └─ passes initialData as props to ↓

TodoApp.tsx (Client Component)
  └─ renders interactive UI with useState
  └─ calls /api/todos for add / toggle / delete
  └─ updates local state on success
```
