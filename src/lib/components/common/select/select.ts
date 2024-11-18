/** Imports */
import type { Styles } from '$lib/utian/types.js';
import type { Snippet } from 'svelte';
import type { HTMLSelectAttributes } from 'svelte/elements';

const styles = {} satisfies Styles;
export const select = styles;

/** Props */
export interface SelectProps extends HTMLSelectAttributes {
	children?: Snippet;
}
