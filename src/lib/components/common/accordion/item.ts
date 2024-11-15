/** Imports */
import type { Styles } from '$lib/utian/types.js';
import type { Snippet } from 'svelte';

/** Styles */
const styles = {
	root: {},
	trigger: {},
	content: {}
} satisfies Styles;
export const accordionItem = styles;

/** Props */
export interface AccordionItemProps {
	children?: Snippet;
	content?: Snippet;
	id?: string;
}
