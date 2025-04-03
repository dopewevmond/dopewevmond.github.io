import BlogContent from "@/components/BlogContent";
import FormattedDate from "@/components/FormattedDate";
import markdownToHtml, { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  const posts = getAllPosts()
 
  return posts.map((post) => ({
    id: post.slug,
  }))
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getPostBySlug(id, true);
  const content = await markdownToHtml(post.content ?? "");

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen">
      <main className="container pt-32 pb-16 md:pt-40 md:pb-20">
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-between text-muted-foreground">
              <div>
                <p>{post.author}</p>
              </div>
              <div className="text-right">
                <time>
                  <FormattedDate
                    date={new Date(post.date)}
                    formatTemplate="MMM DD, YYYY"
                  />
                </time>
              </div>
            </div>
          </div>

          <div className="relative aspect-video mb-8">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto rounded-md"
            />
          </div>

          <BlogContent content={content} />
        </article>
      </main>
    </div>
  );
}
