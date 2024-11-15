/** Imports */

import type { Styles } from '$lib/utian/types.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		sizing: 'mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'
	}
} satisfies Styles;
export const container = styles;

/** Props */
type Props = HTMLAttributes<HTMLDivElement>;
export interface ContainerProps extends Props {
	children: Snippet;
}
