import Link from "next/link";

const lessons = [
  {
    number: "01",
    title: "Server Components",
    description: "Understand how React Server Components work in Next.js — rendered on the server, zero JS sent to the client.",
    href: "/lessons/01-server-component",
    tag: "frontend",
  },
  {
    number: "02",
    title: "Client Components",
    description: "Add interactivity with 'use client'. Learn when to reach for client-side rendering.",
    href: "/lessons/02-client-component",
    tag: "frontend",
  },
  {
    number: "03",
    title: "Data Fetching",
    description: "Fetch data directly in server components using async/await. No useEffect, no loading state boilerplate.",
    href: "/lessons/03-data-fetching",
    tag: "frontend",
  },
  {
    number: "04",
    title: "Routing & Params",
    description: "File-based routing with dynamic segments. Learn how [slug] pages and nested layouts work.",
    href: "/lessons/04-routing",
    tag: "frontend",
  },
  {
    number: "05",
    title: "Route Handlers",
    description: "Build a REST API inside Next.js using route.ts files. Implement GET, POST, PATCH, and DELETE endpoints.",
    href: "/lessons/05-route-handlers",
    tag: "backend",
  },
  {
    number: "06",
    title: "Full-Stack Todo",
    description: "Wire a client component to your own API. Server loads initial data, client handles mutations — the complete pattern.",
    href: "/lessons/06-fullstack-todo",
    tag: "full-stack",
  },
];

const tagColors: Record<string, string> = {
  frontend: "text-blue-400 border-blue-400/30",
  backend: "text-purple-400 border-purple-400/30",
  "full-stack": "text-emerald-400 border-emerald-400/30",
};

export default function Home() {
  return (
    <div>
      <div className="mb-12">
        <div className="text-emerald-400 text-sm mb-3">// welcome</div>
        <h1 className="text-4xl font-bold text-zinc-100 mb-4">
          Next.js by doing.
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
          Each lesson has components with <span className="text-amber-400">TODO</span> comments for you to fill in.
          Covers both frontend rendering patterns <em>and</em> backend API routes.
        </p>
      </div>

      <div className="mb-8">
        <div className="text-zinc-500 text-xs mb-4 uppercase tracking-widest">Lessons</div>
        <div className="grid gap-4">
          {lessons.map((lesson) => (
            <Link
              key={lesson.href}
              href={lesson.href}
              className="group block border border-zinc-800 hover:border-zinc-600 rounded-lg p-6 transition-all hover:bg-zinc-900"
            >
              <div className="flex items-start gap-4">
                <span className="text-zinc-600 text-2xl font-bold group-hover:text-zinc-500 transition-colors">
                  {lesson.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h2 className="text-zinc-100 font-semibold">{lesson.title}</h2>
                    <span className={`text-xs border px-2 py-0.5 rounded ${tagColors[lesson.tag]}`}>
                      {lesson.tag}
                    </span>
                    <span className="text-amber-400 text-xs border border-amber-400/30 px-2 py-0.5 rounded">
                      TODO
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{lesson.description}</p>
                </div>
                <span className="text-zinc-700 group-hover:text-zinc-400 transition-colors">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
        <div className="text-zinc-500 text-xs uppercase tracking-widest mb-3">How to use this</div>
        <ol className="text-zinc-400 text-sm space-y-2">
          <li><span className="text-zinc-200">1.</span> Open the project in your editor</li>
          <li><span className="text-zinc-200">2.</span> Navigate to each lesson page</li>
          <li><span className="text-zinc-200">3.</span> Find the <span className="text-amber-400">// TODO</span> comments in the component files</li>
          <li><span className="text-zinc-200">4.</span> Implement the missing code and save</li>
          <li><span className="text-zinc-200">5.</span> Do lessons 05 → 06 in order — 06 depends on your 05 implementation</li>
        </ol>
      </div>
    </div>
  );
}
