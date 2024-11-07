/** Imports */
import type { Snippet } from 'svelte';
import type { HTMLLabelAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		typography: 'block text-sm/6 font-medium text-gray-900'
	}
};
export const label = styles;

/** Props */
export interface LabelProps extends HTMLLabelAttributes {
	children?: Snippet;
	text?: string;
}
