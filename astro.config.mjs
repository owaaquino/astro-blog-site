import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: 'o46if858',
      dataset: 'production',
      useCdn: false, // set to `false` to bypass the edge cache if you want to ensure fresh data
      apiVersion: '2023-09-02', // use current date (YYYY-MM-DD) to target the latest API version
      token:
        'skERPgeTK4R0CasofUxnVBjc3xPRxRCxbrQTJoGQdVDfAKmwcBbcFnXGsMfOoSWiO0BvLmua9tdoqYYGuXn0K4VVI5xmUAJ9mLkGNt2j5GFEeEAKdMEpSIl65TgE0EWpaUmHpEtRQ4rvFLnCI925XKPOr2XKOOeQF9vBfDuYm4LeAsHBTRFF',
    }),
  ],
});
