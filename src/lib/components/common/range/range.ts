/** Imports */

import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/types/ui.js';
import type { CreateSliderProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		sizing: 'mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'
	}
} satisfies Styles;
export const range = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLDivElement>, 'dir'>;
type SliderProps = Omit<TransformKeysToKebab<CreateSliderProps>, 'value'>;
export interface RangeProps extends Props, SliderProps {
	children?: Snippet;
	value?: number[];
}
