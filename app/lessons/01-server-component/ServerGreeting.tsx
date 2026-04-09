// ============================================================
// LESSON 01 — Server Component
// ============================================================
// This component runs ONLY on the server.
// Your job: make it async and simulate a data fetch.
// ============================================================

// TODO 1: Add the `async` keyword to make this an async Server Component
export default async function ServerGreeting() {

  // TODO 2: Simulate a server-side data fetch.
  // In a real app this might be: const user = await db.user.findFirst()
  // For now, simulate a delay and return fake data:
  //
  //   await new Promise((resolve) => setTimeout(resolve, 500));
  //   const user = { name: "Ada Lovelace", role: "Engineer" };
  //
  // (paste those two lines here)

  await new Promise((resolve) => setTimeout(resolve, 500));
  const user = { name: "Ada Lovelace", role: "Engineer" };


  // TODO 3: Replace the placeholder below with real values from `user`
  const name = user.name;   // should be user.name
  const role = user.role;   // should be user.role

  // This JSX renders on the server and is sent as HTML to the browser.
  return (
    <div>
      <p className="text-zinc-300 text-sm mb-1">Fetched on the server:</p>
      <div className="text-2xl font-bold text-emerald-400">{name}</div>
      <div className="text-zinc-500 text-sm">{role}</div>
      <div className="mt-4 text-xs text-zinc-600">
        Rendered at: {new Date().toISOString()}
      </div>
    </div>
  );
}
