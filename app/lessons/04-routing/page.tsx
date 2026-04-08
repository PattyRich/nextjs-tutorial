// ============================================================
// LESSON 04 — Routing & Dynamic Segments
// ============================================================
import Link from "next/link";

const posts = [
  { id: 1, title: "Getting Started with Next.js" },
  { id: 2, title: "Understanding the App Router" },
  { id: 3, title: "When to use Server vs Client Components" },
  { id: 4, title: "Data Fetching Patterns" },
];

export default function Lesson04() {
  return (
    <div>
      <div className="text-emerald-400 text-sm mb-2">// lesson 04</div>
      <h1 className="text-3xl font-bold mb-2">Routing & Params</h1>
      <p className="text-zinc-400 mb-8 leading-relaxed">
        Next.js uses the file system for routing. Folders become URL segments.
        Wrap a folder name in <code className="text-blue-400">[brackets]</code> to make it a dynamic segment —
        the value becomes accessible as a prop called <code className="text-zinc-200">params</code>.
      </p>

      <div className="lesson-box info mb-6">
        <div className="text-blue-400 text-xs uppercase tracking-widest mb-2">File structure</div>
        <pre className="text-zinc-300 text-xs leading-relaxed">{`app/
  lessons/
    04-routing/
      page.tsx           ← this page  (/lessons/04-routing)
      [id]/
        page.tsx         ← dynamic route (/lessons/04-routing/1)
`}</pre>
      </div>

      <div className="lesson-box todo mb-8">
        <div className="text-amber-400 text-xs uppercase tracking-widest mb-3">Your task</div>
        <p className="text-zinc-300 text-sm">
          Create the file <code className="text-amber-300">app/lessons/04-routing/[id]/page.tsx</code>.
          It should read the <code className="text-zinc-200">id</code> from <code className="text-zinc-200">params</code>{" "}
          and display the matching post from the list below.
        </p>
        <div className="mt-3 text-zinc-500 text-xs">
          Hint: the page receives <code>{"{ params }: { params: { id: string } }"}</code> as props.
        </div>
      </div>

      <div>
        <div className="text-zinc-500 text-xs mb-3 uppercase tracking-widest">Click a post to test your dynamic route</div>
        <div className="space-y-2">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/lessons/04-routing/${post.id}`}
              className="flex items-center justify-between border border-zinc-800 hover:border-zinc-600 rounded-lg p-4 transition-all hover:bg-zinc-900 group"
            >
              <div>
                <span className="text-zinc-600 text-xs mr-3">#{post.id}</span>
                <span className="text-zinc-300 text-sm">{post.title}</span>
              </div>
              <span className="text-zinc-700 group-hover:text-zinc-400 transition-colors text-sm">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
