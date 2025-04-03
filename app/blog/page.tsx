import FormattedDate from "@/components/FormattedDate";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function AllPosts() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      <main className="container pt-32 pb-16 md:pt-40 md:pb-20">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-12">
          All Blog Posts
        </h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex justify-between items-center py-4 border-b"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="text-xl font-semibold hover:text-primary transition-colors"
              >
                {post.title}
              </Link>
              <time className="text-sm text-muted-foreground">
                <FormattedDate
                  date={new Date(post.date)}
                  formatTemplate="MMM DD, YYYY"
                />
              </time>
            </div>
          ))}
          {posts.length === 0 && <p>Coming soon...</p>}
        </div>
      </main>
    </div>
  );
}
