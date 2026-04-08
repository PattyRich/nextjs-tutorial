// ============================================================
// LESSON 02b — Client Component: Toggle
// ============================================================

// TODO 1: Add "use client" directive
// TODO 2: Import useState

export default function ToggleBox() {
  // TODO 3: Create an `isOpen` boolean state (start with false)
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        // TODO 4: onClick should toggle isOpen: setIsOpen(!isOpen)
        className="w-full flex items-center justify-between px-4 py-2 border border-zinc-700 hover:border-zinc-500 rounded transition-colors text-sm text-zinc-300"
      >
        <span>Secret message</span>
        {/* TODO 5: Show "▼" when open, "▶" when closed */}
        <span>▶</span>
      </button>

      {/* TODO 6: Only render this div when isOpen is true */}
      {/* Hint: use {isOpen && <div>...</div>} */}
      <div className="mt-3 p-4 bg-zinc-800 rounded text-sm text-emerald-400">
        🎉 You implemented a client component toggle!
      </div>
    </div>
  );
}
