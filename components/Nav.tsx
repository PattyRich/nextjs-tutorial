import Link from "next/link";

const lessons = [
  { href: "/", label: "Home" },
  { href: "/lessons/01-server-component", label: "01 · Server" },
  { href: "/lessons/02-client-component", label: "02 · Client" },
  { href: "/lessons/03-data-fetching", label: "03 · Data" },
  { href: "/lessons/04-routing", label: "04 · Routing" },
  { href: "/lessons/05-route-handlers", label: "05 · API" },
  { href: "/lessons/06-fullstack-todo", label: "06 · Full-Stack" },
];

export default function Nav() {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-950/80 sticky top-0 z-50 backdrop-blur">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-6 overflow-x-auto">
        <span className="text-emerald-400 font-bold text-sm shrink-0">▲ next.js tutorial</span>
        {lessons.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors shrink-0"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
