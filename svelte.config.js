import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

export default {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],
  kit: {
    adapter: adapter()
  }
};