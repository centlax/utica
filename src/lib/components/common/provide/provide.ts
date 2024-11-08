/** Imports */
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */

/** Props */
export interface ProvideProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet;
}
