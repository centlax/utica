/** Imports */

import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {};
export const calendar = styles;

/** Props */
type Props = HTMLAttributes<HTMLDivElement>;
export interface CalendarProps extends Props {
	children?: Snippet;
}
