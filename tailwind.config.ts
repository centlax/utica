import type { Config } from 'tailwindcss';
import utica from './src/lib/plugins/tailwind/preset';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [utica()]
} satisfies Config;
