/** Imports  */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/utian/types.js';
import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		spacing: 'space-y-1 [data-ui=field]:mt-3'
	},
	help: {
		typography: 'text-xs text-gray-500'
	},
	error: {
		typography: 'text-xs text-danger-500'
	}
} satisfies Styles;
export const field = styles;

/** Props  */
type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;
export interface FieldProps extends BaseProps<typeof field>, Props {
	children?: Snippet;
	label?: Snippet;
	hint?: Snippet | string;
	href?: HTMLAnchorAttributes['href'];
	error?: Snippet | string;
	help?: Snippet | string;
	name: string;
	'all-errors': boolean;
}
