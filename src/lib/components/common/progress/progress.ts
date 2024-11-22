/** Imports */

import type { Styles } from '$lib/types/ui.js';
import type { CreateProgressProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		sizing: 'mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'
	}
} satisfies Styles;
export const progress = styles;

/** Props */
type Props = HTMLAttributes<HTMLDivElement>;
export interface ProgressProps extends Props {
	children?: Snippet;
	max?: CreateProgressProps['max'];
	'default-value'?: CreateProgressProps['defaultValue'];
	value?: number;
}
