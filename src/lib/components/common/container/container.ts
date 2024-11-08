/** Imports */

import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		sizing: 'mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'
	}
};
export const container = styles;

/** Props */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet;
}
