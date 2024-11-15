/** Imports */
import type { Link } from '$lib/types/link.js';
import type { Styles } from '$lib/utian/types.js';
import type { Snippet } from 'svelte';

/** Styles */
const styles = {
	root: {},
	north: {},
	center: {},
	south: {}
} satisfies Styles;
export const sidebar = styles;

/** Props */
export interface SidebarProps {
	north?: Snippet;
	children?: Snippet;
	south?: Snippet;
	mode?: 'full' | 'dual' | 'pine';
	links?: Link[];
}
