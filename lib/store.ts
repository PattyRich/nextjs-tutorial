// ============================================================
// Shared in-memory store
// Used by the /api/todos route handler (lesson 05 & 06)
// In a real app this would be a database (Postgres, SQLite, etc.)
// ============================================================

export type Todo = {
  id: number;
  text: string;
  done: boolean;
  createdAt: string;
};

// Module-level variable — persists across requests in the same server process
let todos: Todo[] = [
  { id: 1, text: "Read the Next.js docs", done: false, createdAt: new Date().toISOString() },
  { id: 2, text: "Build something cool", done: false, createdAt: new Date().toISOString() },
];

let nextId = 3;

export function getTodos(): Todo[] {
  console.log(todos)
  return todos;
}

export function addTodo(text: string): Todo {
  const todo: Todo = {
    id: nextId++,
    text,
    done: false,
    createdAt: new Date().toISOString(),
  };
  todos = [...todos, todo];
  return todo;
}

export function toggleTodo(id: number): Todo | null {
  console.log(todos)
  let found: Todo | null = null;
  todos = todos.map((t) => {
    if (t.id === id) {
      found = { ...t, done: !t.done };
      return found;
    }
    return t;
  });
  return found;
}

export function deleteTodo(id: number): boolean {
  const before = todos.length;
  todos = todos.filter((t) => t.id !== id);
  return todos.length < before;
}
