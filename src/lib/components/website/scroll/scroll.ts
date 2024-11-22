/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/utian/types.js';
import type { CreateSelectProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { FlyParams } from 'svelte/transition';

/** Styles */
const styles = {
	root: {
		flex: 'z-10 flex max-h-[300px] flex-col overflow-y-auto rounded-lg bg-white p-1 shadow focus:!ring-0'
	},
	option: {
		flex: 'relative cursor-pointer rounded-md py-1 pl-8 pr-4 text-neutral-800 	hover:bg-primary-100 focus:z-10 	focus:text-primary-700	data-[highlighted]:bg-primary-200 data-[highlighted]:text-primary-900 data-[disabled]:opacity-50'
	}
} satisfies Styles;
export const selectMenu = styles;

/** Props */
export type Item<T = unknown> = {
	items?: T[]; // Recursive type allows nested items
};
type Exclude = 'value' | 'positioning' | 'arrow-size' | 'ids';
type Props<T extends Item<T>> = Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'title'> &
	Omit<TransformKeysToKebab<CreateSelectProps<T>>, Exclude>;
export interface SelectMenuProps<T extends Item<T>> extends BaseProps<typeof selectMenu>, Props<T> {
	children?: Snippet;
	trigger?: Snippet<[T]>;
	option?: Snippet<[T & { selected: boolean }]>;
	title?: Snippet<[T]>;
	items: T[];
	transition?: TransitionParams<FlyParams>;
	float?: CreateSelectProps['positioning'];
}
