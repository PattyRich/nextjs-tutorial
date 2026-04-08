// ============================================================
// LESSON 03 — Data Fetching: PostList
// ============================================================
// Fetch posts from JSONPlaceholder and display them.
// This is a SERVER component (no "use client").
// ============================================================

// The Post type — you'll need this
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

// TODO 1: Make this component async
export default function PostList() {

  // TODO 2: Fetch posts from the API.
  // Use: https://jsonplaceholder.typicode.com/posts?_limit=8
  // With no-store cache so it's always fresh:
  //
  //   const res = await fetch(
  //     "https://jsonplaceholder.typicode.com/posts?_limit=8",
  //     { cache: "no-store" }
  //   );
  //   const posts: Post[] = await res.json();



  // TODO 3: Replace this placeholder with the real `posts` array
  const posts: Post[] = [];

  // TODO 4: Handle the empty state (remove this once you have data)
  if (posts.length === 0) {
    return (
      <div className="text-amber-400 text-sm border border-amber-400/30 rounded p-4">
        ⚠️ No posts yet — complete the TODOs in PostList.tsx
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* TODO 5: Map over posts and render each one */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="border border-zinc-800 rounded-lg p-4 hover:border-zinc-600 transition-colors"
        >
          <div className="text-zinc-500 text-xs mb-1">#{post.id}</div>
          <div className="text-zinc-200 text-sm font-medium capitalize mb-1">{post.title}</div>
          <div className="text-zinc-500 text-xs line-clamp-2">{post.body}</div>
        </div>
      ))}
    </div>
  );
}
