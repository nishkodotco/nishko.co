import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { SocialLinks } from "@/components/social-links";
import { formatDate, getPosts } from "@/lib/blogs";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/" aria-label="Nishant Kant Ojha — home" className="mx-auto block w-fit rounded-full">
        <Avatar className="size-28 sm:size-32">
          <AvatarImage src="/avatar.jpg" alt="Nishant Kant Ojha" />
          <AvatarFallback className="text-2xl">NK</AvatarFallback>
        </Avatar>
      </Link>

      <SocialLinks className="mt-6" />

      <Separator className="mt-10" />

      {posts.length === 0 ? (
        <p className="py-10 text-center text-muted-foreground">No posts yet.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block py-8">
                <time dateTime={post.date} className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {formatDate(post.date)} · {post.readingMinutes} min read
                </time>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-cinnabar">
                  {post.title}
                </h2>
                {post.summary && <p className="post-lede mt-2 text-lg">{post.summary}</p>}
              </Link>
              <Separator />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
