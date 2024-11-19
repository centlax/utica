/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { CreateComboboxProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {};
export const combobox = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'> &
	Omit<TransformKeysToKebab<CreateComboboxProps>, 'value' | 'onOpenChange' | 'ids'>;

export interface ComboboxProps extends BaseProps<typeof combobox>, Props {
	children?: Snippet;
	empty?: Snippet;
	option?: Snippet
}

/** Context  */
