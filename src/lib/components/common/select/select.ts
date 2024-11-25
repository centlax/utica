/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		flex: 'z-10 flex max-h-[300px] flex-col overflow-y-auto rounded-lg bg-white p-1 shadow focus:!ring-0'
	}
} satisfies Styles;
export const select = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLSelectElement>, 'class' | 'title'>;
export interface SelectProps extends BaseProps<typeof select>, Props {
	children?: Snippet;
}
