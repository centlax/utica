/** Imports */
import type { Styles } from '$lib/utian/types.js';
import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLLabelAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		flex: 'flex justify-between',
		typography: 'block text-sm/6 font-medium text-gray-900 dark:bg-white'
	},
	hint: {
		typography: 'text-primary-500'
	}
} satisfies Styles;
export const label = styles;

/** Props */
export interface LabelProps extends HTMLLabelAttributes {
	children?: Snippet;
	text?: string;
	hint?: Snippet | string;
	href?: HTMLAnchorAttributes['href'];
}
