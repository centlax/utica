/** Imports */
import type { CreatePinInputProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';

/** Styles */

/** Props */
export interface InputPinProps {
	children: Snippet;
	default?: CreatePinInputProps['defaultValue'];
	placeholder?: CreatePinInputProps['placeholder'];
	value?: string[];
	name?: CreatePinInputProps['name'];
	disabled?: CreatePinInputProps['disabled'];
	length?: number;
	type?: CreatePinInputProps['type'];
	ids?: CreatePinInputProps['ids'];
}
