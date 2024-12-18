import { PostNode } from "./types/hashnode";

export function generateJsonLd(post: PostNode) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': post.title,
        'description': post.subtitle || post.brief,
        'author': {
            '@type': 'Person',
            'name': post.author.name,
            'url': 'https://davidfola.me'
        },
        'datePublished': new Date(post.publishedAt).toISOString(),
        'dateModified': new Date(post.updatedAt || post.publishedAt).toISOString(),
        'image': post.coverImage?.url,
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `https://www.davidfola.me/blog/${post.slug}`
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'davidfola.me',
            'logo': {
                '@type': 'ImageObject',
                'url': post.author.profilePicture
            }
        }
    };
}
