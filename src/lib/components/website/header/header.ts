/** Imports */
import type { Link } from '$lib/types/link.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */

/** Props */
export interface HeaderProps extends HTMLAttributes<HTMLElement> {
	links?: Link[];
	children?: Snippet;
	west?: Snippet;
	east?: Snippet;
	aside?: Snippet;
	logo?: Snippet;
}
