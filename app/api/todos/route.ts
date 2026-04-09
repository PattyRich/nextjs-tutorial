// ============================================================
// LESSON 05 — Route Handler: /api/todos
// ============================================================
// This file defines a REST API endpoint at /api/todos.
// Next.js uses the filename `route.ts` to identify route handlers.
// Export named functions GET, POST, PUT, DELETE to handle each method.
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { getTodos, addTodo, toggleTodo, deleteTodo } from "@/lib/store";

// ── GET /api/todos ──────────────────────────────────────────
// TODO 1: Implement the GET handler.
// It should return all todos as JSON.
//
// export async function GET() {
//   const todos = getTodos();
//   return NextResponse.json(todos);
// }
//
// (uncomment the block above and delete this comment to complete it)
export async function GET() {
  const todos = getTodos();
  return NextResponse.json(todos);
  // ⚠️  Remove this placeholder and implement the real handler above
  return NextResponse.json({ error: "GET not implemented yet — see TODO 1" }, { status: 501 });
}

// ── POST /api/todos ─────────────────────────────────────────
// TODO 2: Implement the POST handler.
// Read `text` from the JSON body, validate it, then add a new todo.
//
// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   if (!body.text || typeof body.text !== "string") {
//     return NextResponse.json({ error: "text is required" }, { status: 400 });
//   }
//   const todo = addTodo(body.text.trim());
//   return NextResponse.json(todo, { status: 201 });
// }
export async function POST(_req: NextRequest) {
  const body = await _req.json();
  if (!body.text || typeof body.text !== "string") {
    return NextResponse.json({ error: "text is required" }, { status: 400 });
  }
  const todo = addTodo(body.text.trim());
  return NextResponse.json(todo, { status: 201 });
  return NextResponse.json({ error: "POST not implemented yet — see TODO 2" }, { status: 501 });
}

// ── PATCH /api/todos ────────────────────────────────────────
// TODO 3: Implement the PATCH handler to toggle a todo's done state.
// Read `id` from the JSON body, call toggleTodo(id).
//
// export async function PATCH(req: NextRequest) {
//   const body = await req.json();
//   const todo = toggleTodo(Number(body.id));
//   if (!todo) return NextResponse.json({ error: "Not found" }, { status: 404 });
//   return NextResponse.json(todo);
// }
export async function PATCH(_req: NextRequest) {
  const body = await _req.json();
  const todo = toggleTodo(Number(body.id));
  if (!todo) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(todo);
  return NextResponse.json({ error: "PATCH not implemented yet — see TODO 3" }, { status: 501 });
}

// ── DELETE /api/todos ───────────────────────────────────────
// TODO 4: Implement the DELETE handler.
// Read `id` from the query string: new URL(req.url).searchParams.get("id")
//
// export async function DELETE(req: NextRequest) {
//   const id = Number(new URL(req.url).searchParams.get("id"));
//   const deleted = deleteTodo(id);
//   if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });
//   return NextResponse.json({ success: true });
// }
export async function DELETE(_req: NextRequest) {
  const id = Number(new URL(_req.url).searchParams.get("id"));
  const deleted = deleteTodo(id);
  if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true });
  return NextResponse.json({ error: "DELETE not implemented yet — see TODO 4" }, { status: 501 });
}
