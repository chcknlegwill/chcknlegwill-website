import adapter from '@sveltejs/adapter-cloudflare';

import  sveltePreprocess from 'svelte-preprocess';
//^ getting sass (css) imported
import { mdsvex } from "mdsvex"; //importing mdsvex (for markdown support)

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	
	extensions: [".svelte", ".md"],

	preprocess: [
		sveltePreprocess(), //sass
		mdsvex({
			extensions: [".md"]
		})
	] 
};

export default config;
