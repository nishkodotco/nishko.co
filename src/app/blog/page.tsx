import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>No posts yet</CardTitle>
            <CardDescription>New writing will show up here.</CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="mt-12 flex flex-col gap-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
              <Card className="transition-shadow group-hover:ring-cinnabar/40">
                <CardHeader className="gap-2">
                  <time dateTime={post.date} className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {formatDate(post.date)} · {post.readingMinutes} min read
                  </time>
                  <CardTitle className="flex items-start justify-between gap-4 text-xl font-semibold tracking-tight transition-colors group-hover:text-cinnabar">
                    {post.title}
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-cinnabar" />
                  </CardTitle>
                  {post.summary && <CardDescription className="text-base">{post.summary}</CardDescription>}
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
