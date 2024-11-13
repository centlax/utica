/** Imports */
import type { Snippet } from 'svelte';

/** Styles */
const styles = {};
export const accordionItem = styles;

/** Props */
export interface AccordionItemProps {
	children?: Snippet;
	content?: Snippet;
	id?: string;
}
