/** Imports */
import type { CreateComboboxProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';

/** Styles */
const styles = {};
export const combobox = styles;

/** Props */
export interface ComboboxProps {
	children?: Snippet;
	'force-visible'?: CreateComboboxProps['forceVisible'];
}
