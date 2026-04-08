// ============================================================
// LESSON 06 — Full-Stack: wiring frontend to your API
// ============================================================
// This page loads initial todos on the server (fast first paint),
// then hands off to a client component for interactivity.
// This is the recommended Next.js full-stack pattern.

import { getTodos } from "@/lib/store";
import TodoApp from "./TodoApp";

export default async function Lesson06() {
  // Fetch initial todos on the server — no loading spinner needed
  const initialTodos = getTodos();

  return (
    <div>
      <div className="text-emerald-400 text-sm mb-2">// lesson 06</div>
      <h1 className="text-3xl font-bold mb-2">Full-Stack Todo</h1>
      <p className="text-zinc-400 mb-8 leading-relaxed">
        This lesson ties everything together. The server component loads initial data,
        then passes it as props to a client component that handles interactions —
        calling <em>your own</em> <code className="text-zinc-200">/api/todos</code> route handler from lesson 05.
      </p>

      <div className="lesson-box info mb-6">
        <div className="text-blue-400 text-xs uppercase tracking-widest mb-2">The full-stack pattern</div>
        <pre className="text-zinc-300 text-xs leading-relaxed">{`Server Component (page.tsx)
  └─ fetches initial data from DB/store
  └─ passes it as props to ↓

Client Component (TodoApp.tsx)
  └─ renders interactive UI
  └─ calls /api/todos for mutations (add, toggle, delete)
  └─ updates local state on success`}</pre>
      </div>

      <div className="lesson-box todo mb-8">
        <div className="text-amber-400 text-xs uppercase tracking-widest mb-3">Your task</div>
        <p className="text-zinc-300 text-sm mb-3">
          Open <code className="text-amber-300">app/lessons/06-fullstack-todo/TodoApp.tsx</code> and implement the 3 action functions.
          The UI is already built — you just need to wire up the fetch calls.
        </p>
        <div className="text-zinc-500 text-xs space-y-1">
          <div>TODO 1 — <code>handleAdd</code>: POST to /api/todos with the new text</div>
          <div>TODO 2 — <code>handleToggle</code>: PATCH to /api/todos with the todo id</div>
          <div>TODO 3 — <code>handleDelete</code>: DELETE to /api/todos?id=X</div>
        </div>
        <div className="mt-3 text-zinc-600 text-xs">
          💡 Make sure you completed lesson 05 first — these calls hit your route handlers.
        </div>
      </div>

      <TodoApp initialTodos={initialTodos} />
    </div>
  );
}
