import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: 'space-y-1 [data-ui=field]]:mt-3'
	},
	north: { flex: 'flex justify-between' },
	label: {
		layout: 'block',
		typography: 'text-sm font-medium leading-6 text-gray-800 dark:text-gray-200'
	},
	hint: {
		typography:
			'text-sm leading-6 text-gray-500 data-[this=ancor]:text-primary-500 data-[this=ancor]:font-medium'
	},
	help: { typography: 'text-xs text-gray-500' },
	error: { typography: 'text-xs text-danger-500' }
};

export const fieldset = styles;

export interface FieldsetProps extends HTMLAttributes<HTMLFieldSetElement> {
	children?: Snippet;
	label?: Snippet;
	hint?: Snippet | string;
	href?: HTMLAnchorAttributes['href'];
	error?: Snippet;
	help?: Snippet | string;
}
