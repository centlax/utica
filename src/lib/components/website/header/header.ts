/** Imports */

import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */

/** Props */
export interface HeaderProps extends HTMLAttributes<HTMLElement> {
	children?: Snippet;
	west?: Snippet;
	east?: Snippet;
	aside?: Snippet;
}
