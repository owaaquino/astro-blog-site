import type { SanityReference } from '@sanity/client';
import type { PortableTextBlock } from '@portabletext/types';
import type { Slug } from '@sanity/types';

import { useSanityClient, groq } from 'astro-sanity';

export interface Post {
  // Document
  _type: 'post';
  _createdAt: string;

  // Metadata
  title?: string;
  slug: Slug;
  tags?: SanityReference[]; // TODO : Test if can get
  publishedAt?: string;
  summary?: string;

  // Content
  body: PortableTextBlock[];
}

export async function getPosts(): Promise<Post[]> {
  return await useSanityClient().fetch(groq`*[_type == 'post']`);
}

export async function getPost(slug: string): Promise<Post> {
  return await useSanityClient().fetch(
    groq`*[_type == 'post' && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}
