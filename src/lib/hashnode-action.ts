'use server';

import { hashNodeClient, GET_PUBLICATIONS, GET_ALL_POSTS, GET_SINGLE_POST, GET_RELATED_POSTS, GET_POSTS_IN_SERIES } from './graphql';
import { GetPostResponse, GetPostsInSeriesResponse, GetPostsResponse, GetPublicationsResponse } from './types/hashnode';

export async function fetchPublications(host: string): Promise<GetPublicationsResponse> {
  try {
    const data = await hashNodeClient.request<GetPublicationsResponse>(GET_PUBLICATIONS, { host });
    return data;
  } catch (error: any) {
    console.error('GraphQL Error:', error.response || error.message);
    throw new Error('Failed to fetch publications');
  }
}
export async function fetchAllPosts(publicationId: string, first: number, after?: string): Promise<GetPostsResponse> {
  try {
    const data = await hashNodeClient.request<GetPostsResponse>(GET_ALL_POSTS, {
      publicationId,
      first,
      after,
    });
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function fetchPost(publicationId: string, slug: string): Promise<GetPostResponse> {
  try {
    const data = await hashNodeClient.request<GetPostResponse>(GET_SINGLE_POST, {
      publicationId,
      slug
    });
    return data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}

export async function fetchRelatedPosts(host: string, tagSlugs: string[]): Promise<GetPostsResponse | null > {
  try {
    const data = await hashNodeClient.request<GetPostsResponse>(GET_RELATED_POSTS, { host, tagSlugs });
    return data;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return null;
  }
}

export async function fetchPostsInSeries(publicationId: string, slug: string): Promise<GetPostsInSeriesResponse> {
  try {
    const data = await hashNodeClient.request<GetPostsInSeriesResponse>(GET_POSTS_IN_SERIES, { publicationId, slug });
    return data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}
