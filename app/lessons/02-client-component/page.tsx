// Server component page that imports a client component.
// This is the recommended pattern: keep pages as server components,
// push interactivity down into smaller client components.

import Counter from "./Counter";
import ToggleBox from "./ToggleBox";

export default function Lesson02() {
  return (
    <div>
      <div className="text-emerald-400 text-sm mb-2">// lesson 02</div>
      <h1 className="text-3xl font-bold mb-2">Client Components</h1>
      <p className="text-zinc-400 mb-8 leading-relaxed">
        Add <code className="text-blue-400">"use client"</code> at the top of a file to make it a Client Component.
        These run in the browser and can use <code className="text-zinc-200">useState</code>,{" "}
        <code className="text-zinc-200">useEffect</code>, and event handlers.
      </p>

      <div className="lesson-box info mb-8">
        <div className="text-blue-400 text-xs uppercase tracking-widest mb-2">Key concept</div>
        <ul className="text-zinc-300 text-sm space-y-1">
          <li>→ <code>"use client"</code> at the top of the file opts it into client rendering</li>
          <li>→ All components imported by a client component also become client components</li>
          <li>→ Keep client components small and as deep in the tree as possible</li>
          <li>→ Server components can pass props (including serializable data) to client components</li>
        </ul>
      </div>

      <div className="lesson-box todo mb-8">
        <div className="text-amber-400 text-xs uppercase tracking-widest mb-3">Your tasks</div>
        <p className="text-zinc-300 text-sm mb-2">
          Open the two component files in this folder:
        </p>
        <ol className="text-zinc-400 text-sm space-y-2 list-decimal list-inside">
          <li>
            <code className="text-amber-300">Counter.tsx</code> — implement a click counter with useState
          </li>
          <li>
            <code className="text-amber-300">ToggleBox.tsx</code> — implement a show/hide toggle
          </li>
        </ol>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <div className="text-zinc-500 text-xs mb-3 uppercase tracking-widest">Counter</div>
          <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
            <Counter />
          </div>
        </div>
        <div>
          <div className="text-zinc-500 text-xs mb-3 uppercase tracking-widest">Toggle</div>
          <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
            <ToggleBox />
          </div>
        </div>
      </div>
    </div>
  );
}
