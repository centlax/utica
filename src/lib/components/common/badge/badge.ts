/** Imports */
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */

/** Props */
type Props = HTMLAttributes<HTMLSpanElement>;
export interface BadgeProps extends Props {
	children?: Snippet;
}
