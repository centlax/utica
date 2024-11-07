import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

const styles = {};
export const form = styles;

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
	children?: Snippet;
	schema?: string;
	state?: string;
}
