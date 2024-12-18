import { fetchPostsInSeries } from "@/lib/hashnode-action";
import Image from "next/image";
import React from "react";
import { AuthorNames } from "./author-profiles";
import Link from "next/link";

const HASHNODE_PUBLICATION_ID =
    process.env.NEXT_HASHNODE_PUBLICATION_ID || "";

const SeriesTab = async () => {
  const postInSeriesData = await fetchPostsInSeries(HASHNODE_PUBLICATION_ID, "swe");

  const postInSeries = postInSeriesData.publication.series.posts.edges;

  return (
    <>
      <div className="mb-3">
        <h4 className="text-gray-300">Software Engineering</h4>
      </div>
      <div>
        {postInSeries.map(({ node: post }) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block hover:shadow-lg transition-all"
          >
            {post.coverImage && (
              <Image
                src={post.coverImage.url}
                alt={post.title}
                width={400}
                height={200}
                loading="lazy"
                className="w-full h-48 hidden md:block object-cover object-center aspect-video rounded-xl"
              />
            )}
            <div className="py-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500">{post.subtitle}</p>
              <div className="mt-2 text-sm flex flex-col text-gray-500">
                <AuthorNames author={post.author} coAuthors={post.coAuthors} />
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SeriesTab;
