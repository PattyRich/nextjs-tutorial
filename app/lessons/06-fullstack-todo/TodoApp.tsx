// ============================================================
// LESSON 06 — Full-Stack Todo: Client Component
// ============================================================
// The UI is complete. Your job: implement the 3 action functions
// that talk to your /api/todos route handler.
// ============================================================

"use client";

import { useState } from "react";
import type { Todo } from "@/lib/store";

type Props = {
  initialTodos: Todo[];
};

export default function TodoApp({ initialTodos }: Props) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  // ── TODO 1: Add a new todo ──────────────────────────────
  // Make a POST request to /api/todos with { text: input }
  // On success, add the returned todo to the `todos` state and clear input.
  //
  // Steps:
  //   const res = await fetch("/api/todos", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ text: input.trim() }),
  //   });
  //   if (!res.ok) { setError("Failed to add todo"); return; }
  //   const newTodo: Todo = await res.json();
  //   setTodos((prev) => [...prev, newTodo]);
  //   setInput("");
  async function handleAdd() {
    if (!input.trim()) return;
    setError(null);
    // TODO 1: replace this with the real implementation above
    setError("handleAdd not implemented yet — see TODO 1");
  }

  // ── TODO 2: Toggle a todo's done state ──────────────────
  // Make a PATCH request to /api/todos with { id: todo.id }
  // On success, replace the matching todo in state with the returned value.
  //
  // Steps:
  //   const res = await fetch("/api/todos", {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ id }),
  //   });
  //   if (!res.ok) { setError("Failed to update todo"); return; }
  //   const updated: Todo = await res.json();
  //   setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  async function handleToggle(id: number) {
    setError(null);
    // TODO 2: replace this with the real implementation above
    setError("handleToggle not implemented yet — see TODO 2");
    void id; // remove this line too
  }

  // ── TODO 3: Delete a todo ───────────────────────────────
  // Make a DELETE request to /api/todos?id=<id>
  // On success, filter the todo out of state.
  //
  // Steps:
  //   const res = await fetch(`/api/todos?id=${id}`, { method: "DELETE" });
  //   if (!res.ok) { setError("Failed to delete todo"); return; }
  //   setTodos((prev) => prev.filter((t) => t.id !== id));
  async function handleDelete(id: number) {
    setError(null);
    // TODO 3: replace this with the real implementation above
    setError("handleDelete not implemented yet — see TODO 3");
    void id; // remove this line too
  }

  // ── UI — no changes needed below ────────────────────────
  return (
    <div>
      {/* Add form */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Add a new todo..."
          className="flex-1 bg-zinc-900 border border-zinc-700 rounded px-4 py-2 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-sm transition-colors"
        >
          Add
        </button>
      </div>

      {error && (
        <div className="mb-4 text-amber-400 text-sm border border-amber-400/30 rounded px-3 py-2">
          ⚠️ {error}
        </div>
      )}

      {/* Todo list */}
      {todos.length === 0 ? (
        <div className="text-zinc-600 text-sm text-center py-8">No todos yet. Add one above!</div>
      ) : (
        <div className="space-y-2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-3 border border-zinc-800 rounded-lg px-4 py-3 group hover:border-zinc-700 transition-colors"
            >
              {/* Toggle button */}
              <button
                onClick={() => handleToggle(todo.id)}
                className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                  todo.done
                    ? "bg-emerald-600 border-emerald-600 text-white"
                    : "border-zinc-600 hover:border-zinc-400"
                }`}
              >
                {todo.done && <span className="text-xs">✓</span>}
              </button>

              {/* Text */}
              <span
                className={`flex-1 text-sm transition-colors ${
                  todo.done ? "line-through text-zinc-600" : "text-zinc-300"
                }`}
              >
                {todo.text}
              </span>

              {/* Delete button */}
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-zinc-700 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 text-sm"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 text-zinc-600 text-xs">
        {todos.filter((t) => t.done).length}/{todos.length} done
      </div>
    </div>
  );
}
