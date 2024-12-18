export interface Author {
    name: string;
    profilePicture: string;
}

export interface CoverImage {
    url: string;
}

export type Tags = {
    name: string
};

export interface PostNode {
    id: string;
    title: string;
    subtitle: string;
    slug: string;
    readTimeInMinutes: number;
    brief: string;
    series: {
        name: string;
    }
    coverImage: CoverImage;
    author: Author;
    coAuthors: Author[];
    tags: Tags[];
    content: {
        markdown: string;
    }
    seo: {
        title: string;
        description: string;
    }
    ogMetaData: {
        image: string
    }
    publishedAt: string;
    updatedAt: string;
}

export interface PageInfo {
    hasNextPage: boolean;
    endCursor: string | null;
}

export interface PostEdge {
    node: PostNode;
}

export interface Posts {
    edges: PostEdge[];
    pageInfo: PageInfo;
}

export interface Publication {
    id: string;
    title: string;
    about: {
        text: string;
    };
}

export interface GetPublicationsResponse {
    publication: Publication;
}
export interface GetPostsResponse {
    publication: {
        posts: Posts;
    };
}
export interface GetPostsInSeriesResponse {
    publication: {
        series: {
            posts: Posts;
        }
    };
}
export interface GetPostResponse {
    publication: {
        post: PostNode;
    };
}

export interface HashnodeAPIResponse {
    publication: Publication;
}
