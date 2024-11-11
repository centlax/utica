/** Imports */
import type { CreateDialogProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {};
export const sheet = styles;

/** Props */
type Props = HTMLAttributes<HTMLDivElement>;
export interface SheetProps extends Props {
	children?: Snippet;
	content?: Snippet;
	value?: boolean;
	portal?: CreateDialogProps['portal']
}
