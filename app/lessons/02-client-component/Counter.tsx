// ============================================================
// LESSON 02a — Client Component: Counter
// ============================================================

// TODO 1: Add the "use client" directive here (must be the very first line)
// "use client"

// TODO 2: Import useState from React
// import { useState } from "react";

export default function Counter() {
  // TODO 3: Create a count state variable initialized to 0
  // const [count, setCount] = useState(0);

  // TODO 4: Replace the button's onClick with setCount(count + 1)

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-5xl font-bold text-zinc-200">
        {/* TODO 5: Display `count` here */}
        ?
      </div>
      <button
        // TODO 4: add onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded transition-colors text-sm"
      >
        Click me
      </button>
      <p className="text-zinc-600 text-xs">clicks so far</p>
    </div>
  );
}
