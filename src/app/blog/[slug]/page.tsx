import { fetchPost, fetchRelatedPosts } from "@/lib/hashnode-action";
import { FaRegClock } from "react-icons/fa6";
import Image from "next/image";
import RelatedPosts from "@/components/related-posts";
import { PostNode } from "@/lib/types/hashnode";
import MarkdownFormatter from "@/components/markdown-formatter";
import Link from "next/link";
import { generateJsonLd } from "@/lib/blog-json-ld";
import { generatePostMetadata } from "@/lib/blog-metadata";
import { Metadata } from "next";
import AuthorProfiles, { AuthorNames } from "@/components/blog/author-profiles";
import ScrollToTopButton from "@/components/scroll-to-top-button";

const HASHNODE_PUBLICATION_ID =
  process.env.NEXT_HASHNODE_PUBLICATION_ID || "616b433db636526db5f485f8";
const HASHNODE_HOST =
  process.env.NEXT_HASHNODE_PUBLICATION_HOST || "zyzer01.hashnode.dev";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const postData = await fetchPost(HASHNODE_PUBLICATION_ID, params.slug);
  const post = postData.publication.post;

  return generatePostMetadata({
    post,
  });
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const postData = await fetchPost(HASHNODE_PUBLICATION_ID, params.slug);
  const post = postData.publication.post;

  const jsonLd = generateJsonLd(post);

  const currentPostId = post.id;

  const tagSlugs = post.tags.map((tag) => tag.name);

  const relatedPostData = await fetchRelatedPosts(HASHNODE_HOST, tagSlugs);

  let relatedPosts: PostNode[] = [];

  if (relatedPostData && relatedPostData.publication) {
    relatedPosts = relatedPostData.publication.posts.edges
      .filter((edge) => edge.node.id !== currentPostId)
      .map((edge) => edge.node);
  }
  //   const relatedPosts = relatedPostData.publication.posts.edges;

  console.log(post);

  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div className="max-w-7xl mx-auto px-8 sm:px-16 md:px-28 lg:px-60 pb-20">
        <Link href="/blog">
          <p className="underline mt-4">Go Back</p>
        </Link>
        {post.coverImage && (
          <Image
            src={post.coverImage.url}
            alt={post.title}
            width={1200}
            height={600}
            loading="lazy"
            className="w-full py-8 object-contain lg:object-cover rounded-xl"
          />
        )}
        <h2 className="text-lg md:text-2xl mb-8">{post.subtitle}</h2>
        <div className="flex justify-between">
          <div className="flex items-center space-x-3 mb-6 text-sm text-gray-400">
            <AuthorProfiles author={post.author} coAuthors={post.coAuthors} />
            <div className="flex flex-col space-y-1">
              <AuthorNames author={post.author} coAuthors={post.coAuthors} />
              {new Date(post.publishedAt).toLocaleDateString()}
            </div>
          </div>
          <div>
            <p className="font-semibold flex items-center gap-x-2">
              <span>
                <FaRegClock />
              </span>
              {post.readTimeInMinutes} min
            </p>
          </div>
        </div>

        <MarkdownFormatter markdown={post.content.markdown} />
        <p className="text-right mt-6 text-gray-400">
          Last updated: {new Date(post.updatedAt).toLocaleDateString()}
        </p>
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </div>
      <ScrollToTopButton />
    </div>
  );
}
