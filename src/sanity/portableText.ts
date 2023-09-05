import { portableTextToHtml } from 'astro-sanity';
import { urlForImage } from './urlForImage';

interface ImageProps {
  asset: any;
  alt?: string;
}

const customComponents = {
  types: {
    image: ({ value }: { value: ImageProps }) => {
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
