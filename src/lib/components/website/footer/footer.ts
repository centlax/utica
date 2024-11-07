import type { Link } from '$lib/types/link.js';
import type { Snippet } from 'svelte';
//import type { HTMLAttributes } from 'svelte/elements';

const styles = {};
export const footer = styles;

export interface FooterProps {
	children?: Snippet;
	links?: Link[];
	south?: Snippet;
}
