import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLTextareaAttributes } from 'svelte/elements';

const styles = {} satisfies Styles;

export const textarea = styles;

export interface TextareaProps extends HTMLTextareaAttributes {
	children?: Snippet;
}
