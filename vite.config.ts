import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import myPlugin from './src/lib/plugins/vite/index.js';

export default defineConfig({
	plugins: [sveltekit(), myPlugin()],

	test: {
		include: ['test/**/*.{test,spec}.{js,ts}']
	}
});
