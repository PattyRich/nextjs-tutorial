# Next.js Tutorial Project

Learn Next.js by implementing real components. Each lesson has `// TODO` comments guiding you through the concept.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Lessons

| # | Lesson | File(s) to edit |
|---|--------|-----------------|
| 01 | Server Components | `app/lessons/01-server-component/ServerGreeting.tsx` |
| 02 | Client Components | `app/lessons/02-client-component/Counter.tsx` + `ToggleBox.tsx` |
| 03 | Data Fetching | `app/lessons/03-data-fetching/PostList.tsx` |
| 04 | Routing & Params | `app/lessons/04-routing/[id]/page.tsx` |

## Key Concepts

### Server vs Client Components

| | Server | Client |
|---|---|---|
| Default? | ✅ Yes | ❌ No — needs `"use client"` |
| Can be async? | ✅ Yes | ❌ No |
| useState / useEffect? | ❌ No | ✅ Yes |
| Event handlers? | ❌ No | ✅ Yes |
| Access DB/secrets? | ✅ Yes | ❌ No |
| Sent to browser? | HTML only | HTML + JS |

### Data Fetching

```tsx
// SSG-style (cached forever)
const res = await fetch(url);

// SSR-style (fresh every request)
const res = await fetch(url, { cache: "no-store" });

// ISR-style (re-fetch every N seconds)
const res = await fetch(url, { next: { revalidate: 60 } });
```

### Dynamic Routes

```
app/lessons/04-routing/[id]/page.tsx
                        ^^^^
                        This becomes params.id
```

```tsx
export default function Page({ params }: { params: { id: string } }) {
  console.log(params.id); // "1", "2", etc.
}
```
