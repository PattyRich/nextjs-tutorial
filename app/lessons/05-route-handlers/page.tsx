// ============================================================
// LESSON 05 — Route Handlers (API Routes)
// ============================================================
import ApiTester from "./ApiTester";

export default function Lesson05() {
  return (
    <div>
      <div className="text-emerald-400 text-sm mb-2">// lesson 05</div>
      <h1 className="text-3xl font-bold mb-2">Route Handlers</h1>
      <p className="text-zinc-400 mb-8 leading-relaxed">
        Next.js lets you build a backend API right inside your project.
        Create a <code className="text-blue-400">route.ts</code> file in the{" "}
        <code className="text-zinc-200">app/api/</code> directory and export
        named functions <code className="text-emerald-400">GET</code>,{" "}
        <code className="text-emerald-400">POST</code>,{" "}
        <code className="text-emerald-400">PATCH</code>,{" "}
        <code className="text-emerald-400">DELETE</code> to handle each HTTP method.
      </p>

      <div className="lesson-box info mb-6">
        <div className="text-blue-400 text-xs uppercase tracking-widest mb-2">Key concept</div>
        <ul className="text-zinc-300 text-sm space-y-1">
          <li>→ <code>app/api/todos/route.ts</code> handles requests to <code>/api/todos</code></li>
          <li>→ Export <code>GET</code>, <code>POST</code>, <code>PATCH</code>, <code>DELETE</code> as named async functions</li>
          <li>→ Use <code>NextRequest</code> to read the body, headers, query params</li>
          <li>→ Return <code>NextResponse.json(data)</code> to send JSON back</li>
          <li>→ Pass a second arg for status: <code>NextResponse.json(data, {"{ status: 201 }"})</code></li>
        </ul>
      </div>

      <div className="lesson-box todo mb-8">
        <div className="text-amber-400 text-xs uppercase tracking-widest mb-3">Your task</div>
        <p className="text-zinc-300 text-sm mb-3">
          Open <code className="text-amber-300">app/api/todos/route.ts</code> and implement all 4 handlers.
          Each has a commented-out solution — read it, understand it, then uncomment and replace the placeholder.
        </p>
        <div className="text-zinc-500 text-xs space-y-1">
          <div>TODO 1 — <code>GET</code>: return all todos</div>
          <div>TODO 2 — <code>POST</code>: create a todo from request body</div>
          <div>TODO 3 — <code>PATCH</code>: toggle done state by id</div>
          <div>TODO 4 — <code>DELETE</code>: remove a todo by query param</div>
        </div>
      </div>

      <div>
        <div className="text-zinc-500 text-xs mb-3 uppercase tracking-widest">Live API tester</div>
        <ApiTester />
      </div>
    </div>
  );
}
