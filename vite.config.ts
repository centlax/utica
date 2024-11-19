import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import utica from './src/lib/plugins/vite/index.js';

export default defineConfig({
	plugins: [sveltekit(), utica()],

	test: {
		include: ['test/**/*.{test,spec}.{js,ts}']
	}
});
