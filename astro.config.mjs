import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), mdx()],
  vite: {
    ssr: {
      noExternal: ['css.gg']
    }
  }
});