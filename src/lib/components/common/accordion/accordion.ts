/** Imports */
import type { CreateAccordionProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
//import type { AccordionLink } from '$lib/types/link.js';

/** Styles */
const styles = {};
export const paginate = styles;

/** Props */
export interface AccordionProps {
	children?: Snippet;
	multiple?: CreateAccordionProps['multiple'];
	disabled?: CreateAccordionProps['disabled'];
	'force-visible'?: CreateAccordionProps['forceVisible'];
	'default-value'?: CreateAccordionProps['defaultValue'];
	value?: CreateAccordionProps['value'];
}
