import Link from "next/link";
import Image from "next/image";
import { fetchAllPosts, fetchPublications } from "@/lib/hashnode-action";
import { Suspense } from "react";
import { PostsLoading } from "@/components/posts-loading";
import AuthorProfiles, { AuthorNames } from "@/components/blog/author-profiles";
import { IoMdArrowRoundBack } from "react-icons/io";
import SeriesTab from "@/components/blog/series-tab";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | David Onifade",
  description:
    "I write about Software Engineering, Frontend Development, Backend Development, and DevOps.",
  openGraph: {
    title: "🚀 Software Engineering Insights | David Onifade",
    description:
      "I write about Software Engineering, Frontend Development, Backend Development, and DevOps.",
    url: "https://www.davidfola.me/blog",
  },
};

export default async function BlogHome() {
  const publicationData = await fetchPublications("zyzer01.hashnode.dev");

  const publication = publicationData.publication;

  const postsData = await fetchAllPosts(publication.id, 10);

  const posts = postsData.publication.posts.edges;

  return (
    <div className="px-8 md:px-12 lg:px-28 py-8 md:py-12">
      <div className="pb-12 grid grid-cols-1 md:grid-cols-2 place-content-between">
        <div className="order-last md:order-first">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">
              Blog
            </span>
          </h1>
          <p className="proggy text-xl">
            Frontend • Backend • Software-Engineering • Devops
          </p>
        </div>
        <div className="place-self-end">
          <Link href="/">
            <button className="proggy group text-bright rounded border border-bright hover:bg-gray-500 hover:bg-opacity-25 duration-500 transition ease-in-out px-10 py-2 flex items-center w-full">
              <span className="inline-block text-xl mr-2 transition-transform group-hover:-translate-x-1">
                <IoMdArrowRoundBack />
              </span>
              Back
            </button>
          </Link>
        </div>
      </div>
      <Suspense fallback={<PostsLoading />}>
        <div className="grid md:grid-cols-5 gap-6 lg:gap-10">
          <div className="col-span-5 md:col-span-3">
            <div className="grid gap-y-8">
              {posts.map(({ node: post }) => (
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
                      className="w-full h-[200px] md:h-[300px] object-cover object-center aspect-video rounded-xl"
                    />
                  )}
                  <div className="py-3">
                    <p className="font-medium text-gray-400 mb-2 uppercase">
                      {post.series.name}
                    </p>
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-gray-500">{post.subtitle}</p>
                    <div className="flex items-center space-x-3 mt-2 text-sm text-gray-400">
                      <AuthorProfiles
                        author={post.author}
                        coAuthors={post.coAuthors}
                      />
                      <div className="flex flex-col space-y-1">
                        <AuthorNames
                          author={post.author}
                          coAuthors={post.coAuthors}
                        />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="border border-gray-700 rounded-2xl p-4 col-span-5 md:col-span-2 h-auto self-start">
            <SeriesTab />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
