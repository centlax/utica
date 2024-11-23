/** src/app.ts */
import type { UserConfig as UI } from '$lib/config/plugins/vite/default.js';
export const primary = 'teal';

export default defineApp({
	ui: {
		colors: {
			primary: 'sky',
			neutral: 'warm'
		}
	}
});

function defineApp(config: { ui: UI }) {
	return config;
}
