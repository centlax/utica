/** Imports */
import type { Link } from '$lib/types/link.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {};
export const headerItem = styles;

/** Props */
export interface HeaderItemProps extends HTMLAttributes<HTMLDivElement> {
	link?: Link;
	children?: Snippet;
}
