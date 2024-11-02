import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	css: {
		preprocessorOptions: {
			scss: {
				api: "modern-compiler"
			}
		}
	},
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three', 'troika-three-text']
	}
};

export default config;