import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

/**
 *  '[&>[data-slot=label]+[data-slot=control]]:mt-3',
        '[&>[data-slot=label]+[data-slot=description]]:mt-1',
        '[&>[data-slot=description]+[data-slot=control]]:mt-3',
        '[&>[data-slot=control]+[data-slot=description]]:mt-3',
        '[&>[data-slot=control]+[data-slot=error]]:mt-3',
        '[&>[data-slot=label]]:font-medium'
 */
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

export const field = styles;

export interface FieldProps extends HTMLAttributes<HTMLDivElement> {
	children?: Snippet;
	label?: Snippet;
	hint?: Snippet | string;
	href?: HTMLAnchorAttributes['href'];
	error?: Snippet | string;
	help?: Snippet | string;
	name: string;
}
