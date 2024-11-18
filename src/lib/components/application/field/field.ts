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
		spacing: 'space-y-1 [data-ui=field]:mt-3'
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
