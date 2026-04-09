"use client";

import { useState } from "react";

type Result = {
  status: number;
  body: unknown;
};

export default function ApiTester() {
  const [results, setResults] = useState<Record<string, Result | null>>({
    GET: null,
    POST: null,
    PATCH: null,
    DELETE: null,
  });
  const [loading, setLoading] = useState<string | null>(null);

  async function run(label: string, fn: () => Promise<Response>) {
    setLoading(label);
    try {
      const res = await fn();
      const body = await res.json();
      setResults((r) => ({ ...r, [label]: { status: res.status, body } }));
    } catch (e) {
      setResults((r) => ({ ...r, [label]: { status: 0, body: String(e) } }));
    } finally {
      setLoading(null);
    }
  }

  const tests = [
    {
      label: "GET",
      description: "Fetch all todos",
      color: "text-blue-400 border-blue-400/30 hover:bg-blue-400/10",
      action: () => run("GET", () => fetch("/api/todos")),
    },
    {
      label: "POST",
      description: 'Create {"text": "New todo"}',
      color: "text-emerald-400 border-emerald-400/30 hover:bg-emerald-400/10",
      action: () =>
        run("POST", () =>
          fetch("/api/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: "New todo from tester" }),
          })
        ),
    },
    {
      label: "PATCH",
      description: "Toggle todo #1",
      color: "text-amber-400 border-amber-400/30 hover:bg-amber-400/10",
      action: () =>
        run("PATCH", () =>
          fetch("/api/todos", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: 1, text: 'hi boss man' }),
          })
        ),
    },
    {
      label: "DELETE",
      description: "Delete todo ?id=2",
      color: "text-red-400 border-red-400/30 hover:bg-red-400/10",
      action: () =>
        run("DELETE", () => fetch("/api/todos?id=2", { method: "DELETE" })),
    },
  ];

  return (
    <div className="space-y-3">
      {tests.map((t) => (
        <div key={t.label} className="border border-zinc-800 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <button
              onClick={t.action}
              disabled={loading === t.label}
              className={`text-xs font-bold border px-3 py-1 rounded transition-colors ${t.color} disabled:opacity-50`}
            >
              {loading === t.label ? "..." : t.label}
            </button>
            <code className="text-zinc-400 text-xs">{t.description}</code>
          </div>
          {results[t.label] && (
            <div className="bg-zinc-900 rounded p-3">
              <div className="text-zinc-500 text-xs mb-1">
                Status: <span className={results[t.label]!.status >= 200 && results[t.label]!.status < 300 ? "text-emerald-400" : "text-red-400"}>{results[t.label]!.status}</span>
              </div>
              <pre className="text-zinc-300 text-xs overflow-auto max-h-40">
                {JSON.stringify(results[t.label]!.body, null, 2)}
              </pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
