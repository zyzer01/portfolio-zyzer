import { GraphQLClient } from 'graphql-request';

export const HASHNODE_API_ENDPOINT = 'https://gql.hashnode.com';

export const hashNodeClient = new GraphQLClient(HASHNODE_API_ENDPOINT, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NEXT_HASHNODE_API_TOKEN}`
  }
});


export const GET_PUBLICATIONS = `
  query GetPublications($host: String!) {
    publication(host: $host) {
      id
      title
      about {
        text
      }
    }
  }
`;

export const GET_ALL_POSTS = `
  query GetAllPosts($publicationId: ObjectId!, $first: Int!, $after: String) {
    publication(id: $publicationId) {
      posts(first: $first, after: $after) {
        edges {
          node {
            id
            title
            slug
            publishedAt
            subtitle
            coverImage {
              url
            }
            series {
              name
            }
            author {
              name
              profilePicture
            }
            coAuthors {
              name
              profilePicture
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;


export const GET_SINGLE_POST = `
  query GetSinglePost($publicationId: ObjectId!, $slug: String!) {
    publication(id: $publicationId) {
      post(slug: $slug) {
        id
        title
        subtitle
        readTimeInMinutes
        content {
          markdown
        }
        publishedAt
        updatedAt
        coverImage {
          url
        }
        seo {
          title
          description
        }
        ogMetaData {
            image
        }
        author {
          name
          profilePicture
        }
        tags {
          name
        }
      }
    }
  }
`;

export const GET_RELATED_POSTS = `
  query GetRelatedPosts($host: String!, $tagSlugs: [String!]!) {
  publication(host: $host) {
    posts(first: 4, filter: {tagSlugs: $tagSlugs}) {
      edges {
        node {
          id
          title
          slug
          publishedAt
          brief
          coverImage {
            url
          }
          tags {
            name
          }
        }
      }
    }
  }
}
`;

export const GET_POSTS_IN_SERIES = `
query GetPostsInSeries($publicationId: ObjectId!, $slug: String!) {
  publication(id: $publicationId) {
    series(slug: $slug) {
      posts(first: 4) {
        edges {
          node {
            id
            title
            slug
            coverImage {
              url
            }
            author {
              name
              profilePicture
            }
            publishedAt
          }
        }
      }
    }
  }
}
`;
