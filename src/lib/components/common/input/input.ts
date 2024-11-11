/** Imports */
import type { Snippet } from 'svelte';
import type { HTMLInputAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		flex: 'flex items-center gap-2'
	}
};
export const inputPin = styles;

/** Props */
type Props = HTMLInputAttributes;
export interface InputPinProps extends Props {
	children: Snippet;
	as?: string;
}
