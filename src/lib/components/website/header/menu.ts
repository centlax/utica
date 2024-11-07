/** Imports */
import type { Link } from '$lib/types/link.js';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {};
export const headerMenu = styles;

/** Props */
export interface HeaderMenuProps extends HTMLAttributes<HTMLDivElement> {
	link?: Link;
}
