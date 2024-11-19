/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/utian/types.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		flex: 'flex'
	},
	title: {},
	description: {}
} satisfies Styles;

export const alert = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'title'>;
export interface AlertProps extends BaseProps<typeof alert>, Props {
	children?: Snippet;
	title?: string | Snippet;
	description?: string | Snippet;
}
