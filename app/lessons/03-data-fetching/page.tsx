// ============================================================
// LESSON 03 — Data Fetching in Server Components
// ============================================================
// Next.js extends the native fetch() API with caching options.
// Server components can fetch data directly — no useEffect needed.

import PostList from "./PostList";
import { Suspense } from "react";

export default function Lesson03() {
  return (
    <div>
      <div className="text-emerald-400 text-sm mb-2">// lesson 03</div>
      <h1 className="text-3xl font-bold mb-2">Data Fetching</h1>
      <p className="text-zinc-400 mb-8 leading-relaxed">
        Server Components can <code className="text-emerald-400">await</code> data directly.
        Next.js extends <code className="text-zinc-200">fetch()</code> with caching — by default responses
        are cached; use <code className="text-blue-400">{"{ cache: 'no-store' }"}</code> for fresh data on every request.
      </p>

      <div className="lesson-box info mb-8">
        <div className="text-blue-400 text-xs uppercase tracking-widest mb-2">Key concept</div>
        <ul className="text-zinc-300 text-sm space-y-1">
          <li>→ <code>fetch(url)</code> — cached (like SSG: generate once)</li>
          <li>→ <code>fetch(url, {"{ cache: 'no-store' }"})</code> — fresh every request (like SSR)</li>
          <li>→ <code>fetch(url, {"{ next: { revalidate: 60 } }"})</code> — re-fetch every 60s (ISR)</li>
          <li>→ Wrap slow fetches in <code>&lt;Suspense&gt;</code> to stream them in</li>
        </ul>
      </div>

      <div className="lesson-box todo mb-8">
        <div className="text-amber-400 text-xs uppercase tracking-widest mb-3">Your task</div>
        <p className="text-zinc-300 text-sm">
          Open <code className="text-amber-300">app/lessons/03-data-fetching/PostList.tsx</code> and complete the TODOs
          to fetch posts from the JSONPlaceholder API and render them.
        </p>
      </div>

      <div>
        <div className="text-zinc-500 text-xs mb-3 uppercase tracking-widest">Result</div>
        <Suspense
          fallback={
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-16 bg-zinc-800 rounded animate-pulse" />
              ))}
            </div>
          }
        >
          <PostList />
        </Suspense>
      </div>
    </div>
  );
}
