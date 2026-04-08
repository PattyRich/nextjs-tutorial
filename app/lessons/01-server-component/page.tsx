// This file is a SERVER COMPONENT by default.
// No "use client" directive = runs on the server.
// It can be async, access env vars, read from DB, etc.

import ServerGreeting from "./ServerGreeting";
import { Suspense } from "react";

export default function Lesson01() {
  return (
    <div>
      <div className="text-emerald-400 text-sm mb-2">// lesson 01</div>
      <h1 className="text-3xl font-bold mb-2">Server Components</h1>
      <p className="text-zinc-400 mb-8 leading-relaxed">
        In Next.js (App Router), every component is a{" "}
        <span className="text-zinc-200">Server Component</span> by default.
        They render on the server — no JavaScript is sent to the browser for them.
        They can be <code className="text-emerald-400">async</code>, access databases, read files, and use secrets safely.
      </p>

      <div className="lesson-box info mb-8">
        <div className="text-blue-400 text-xs uppercase tracking-widest mb-2">Key concept</div>
        <ul className="text-zinc-300 text-sm space-y-1">
          <li>→ No <code>useState</code>, no <code>useEffect</code>, no event handlers</li>
          <li>→ Can <code>await</code> data directly in the component body</li>
          <li>→ Never exposed to the browser — safe for secrets</li>
          <li>→ Zero JS bundle cost</li>
        </ul>
      </div>

      <div className="lesson-box todo">
        <div className="text-amber-400 text-xs uppercase tracking-widest mb-3">Your task</div>
        <p className="text-zinc-300 text-sm mb-4">
          Open <code className="text-amber-300">app/lessons/01-server-component/ServerGreeting.tsx</code>.
          Complete the TODOs to:
        </p>
        <ol className="text-zinc-400 text-sm space-y-1 list-decimal list-inside">
          <li>Make the component async</li>
          <li>Simulate a server-side data fetch with a delay</li>
          <li>Return the greeting with the fetched data</li>
        </ol>
      </div>

      <div className="mt-8">
        <div className="text-zinc-500 text-xs mb-3 uppercase tracking-widest">Result</div>
        <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
          <Suspense fallback={<div className="text-zinc-500 animate-pulse">Loading from server...</div>}>
            <ServerGreeting />
          </Suspense>
        </div>
      </div>

      <div className="mt-6 text-zinc-600 text-xs">
        💡 Tip: Right-click → "View Page Source" in your browser. You'll see the HTML is pre-rendered — no client JS!
      </div>
    </div>
  );
}
