import imageUrlBuilder from '@sanity/image-url';
import { useSanityClient } from 'astro-sanity';
import type { Image } from '@sanity/types';

const builder = imageUrlBuilder(useSanityClient());

export function urlForImage(source: Image) {
  return builder.image(source);
}
