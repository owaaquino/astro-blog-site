import { portableTextToHtml } from 'astro-sanity';
import { urlForImage } from './urlForImage';
import type { Image } from '@sanity/types';

const customComponents = {
  types: {
    image: ({ value }: any) => {
      return `
        <picture>
          <source
            srcset="${urlForImage(value.asset).format('webp').url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${urlForImage(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    },
  },
};

export function sanityPortableText(portabletext: any) {
  return portableTextToHtml(portabletext, customComponents);
}
