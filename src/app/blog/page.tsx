import Link from "next/link";
import { formatDate, getPosts } from "@/lib/blogs";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Thoughts, notes, and things I&apos;m learning.
      </p>

      {posts.length === 0 ? (
        <p className="mt-12 text-muted-foreground">No posts yet.</p>
      ) : (
        <ul className="mt-12 divide-y divide-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block py-6">
                <time dateTime={post.date} className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-1 text-xl font-semibold tracking-tight transition-colors group-hover:text-cinnabar">
                  {post.title}
                </h2>
                {post.summary && <p className="mt-2 text-muted-foreground">{post.summary}</p>}
                {post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
