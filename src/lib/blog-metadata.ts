import { Metadata } from 'next';
import { PostNode } from "@/lib/types/hashnode";

type SEOProps = {
  post: PostNode;
  hostname: string;
};

export function generatePostMetadata({ post, hostname }: SEOProps): Metadata {
  const title = post.title;
  const description = post.subtitle || post.brief;
  const ogTitle = post.seo.title;
  const ogDescription = post.seo.description;
  const ogImage = post.ogMetaData.image || post.coverImage.url;
  const publishedTime = new Date(post.publishedAt).toISOString();
  const modifiedTime = new Date(post.updatedAt).toISOString();

  return {
    title: title,
    description: description,
    authors: [{ name: post.author.name }],
    keywords: post.tags.map(tag => tag.name),
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: 'article',
      publishedTime: publishedTime,
      modifiedTime: modifiedTime,
      authors: [post.author.name],
      images: ogImage ? [{
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title
      }] : [],
      url: `https://${hostname}/blog/${post.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ogImage ? [ogImage] : [],
      creator: `@zyzer01`
    },
    alternates: {
      canonical: `https://${hostname}/blog/${post.slug}`
    },
    other: {
      'article:published_time': publishedTime,
      'article:modified_time': modifiedTime,
      'article:author': post.author.name,
      'article:tag': post.tags.map(tag => tag.name).join(',')
    }
  };
}
