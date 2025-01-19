import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

// static metadata
// export const metadata = {
//   title: "Browse all our X posts.",
//   description: "Browse all our posts.",
// };

// dynamic metadata example
export async function generateMetadata() {
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return {
    title: `Browse all ${numberOfPosts} posts.`,
    description: "Browse all our posts.",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
