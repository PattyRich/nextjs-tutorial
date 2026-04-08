// ============================================================
// LESSON 04 — Dynamic Route: [id]/page.tsx
// ============================================================
// This page is a TEMPLATE for you to implement.
// The [id] folder name means Next.js will match any URL like:
//   /lessons/04-routing/1
//   /lessons/04-routing/42
// ...and pass the value as params.id
// ============================================================

import Link from "next/link";

// The posts data (same as the list page)
const posts = [
  { id: 1, title: "Getting Started with Next.js", body: "Next.js is a React framework that gives you building blocks to create web applications. It handles tooling and configuration for React, and provides additional features like routing, data fetching, and rendering strategies." },
  { id: 2, title: "Understanding the App Router", body: "The App Router uses React Server Components by default. Every file in the app/ directory is a server component unless you add 'use client'. Layouts wrap pages and are cached between navigations." },
  { id: 3, title: "When to use Server vs Client Components", body: "Use server components for data fetching, accessing backend resources, and keeping sensitive info off the client. Use client components for interactivity, browser APIs, and React hooks like useState and useEffect." },
  { id: 4, title: "Data Fetching Patterns", body: "In Next.js you can fetch data in server components using async/await directly. Next.js extends fetch with caching options: no-store for SSR behavior, or next.revalidate for ISR." },
];

// TODO 1: Add the `params` prop to this component.
// Its type is: { params: { id: string } }
//
// export default function PostPage({ params }: { params: { id: string } }) {
export default function PostPage() {

  // TODO 2: Get the post id from params
  // const id = Number(params.id);

  // TODO 3: Find the matching post
  // const post = posts.find((p) => p.id === id);

  // TODO 4: Handle post not found
  // if (!post) {
  //   return (
  //     <div>
  //       <p className="text-red-400">Post not found.</p>
  //       <Link href="/lessons/04-routing" className="text-zinc-400 text-sm hover:text-zinc-200">← Back</Link>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Link
        href="/lessons/04-routing"
        className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors mb-8 inline-block"
      >
        ← Back to lesson 04
      </Link>

      <div className="lesson-box todo mb-6">
        <div className="text-amber-400 text-xs uppercase tracking-widest mb-2">Implement me!</div>
        <p className="text-zinc-400 text-sm">
          Follow the TODO comments in this file to display the correct post.
        </p>
      </div>

      {/* TODO 5: Replace these placeholders with post.id, post.title, post.body */}
      <div className="text-zinc-600 text-sm mb-2">Post #???</div>
      <h1 className="text-2xl font-bold text-zinc-100 mb-4">Title goes here</h1>
      <p className="text-zinc-400 leading-relaxed">Body goes here...</p>
    </div>
  );
}
