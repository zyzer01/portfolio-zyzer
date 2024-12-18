import Link from 'next/link'
import Image from 'next/image'
import { PostNode } from '@/lib/types/hashnode'

interface RelatedPostsProps {
  posts: PostNode[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            href={`/blog/${post.slug}`} 
            className="block hover:shadow-lg transition-all"
          >
            {post.coverImage && (
              <Image 
                src={post.coverImage.url} 
                alt={post.title} 
                width={300} 
                height={150}
                loading='lazy'
                className="w-full h-36 object-contain"
              />
            )}
            <div className="p-3">
              <h4 className="font-semibold">{post.title}</h4>
              <p className="text-sm text-gray-600">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
