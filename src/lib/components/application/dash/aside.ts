/** Imports */
//import type { Link } from '$lib/types/link.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/utian/types.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {},
	nav: {
		flex: 'flex flex-1 flex-col justify-between',
		ul: {
			title: {
				ul: {
					li: {}
				}
			}
		}
	}
} satisfies Styles;
export const dashAside = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLElement>, 'class'>;

export type Item<T = unknown> = {
	items?: T[]; // Recursive type allows nested items
};
export interface DashAsideProps<T extends Item<T>> extends BaseProps<typeof dashAside>, Props {
	children?: Snippet;
	trigger?: Snippet<[T]>;
	content?: Snippet<[T]>;
	north?: Snippet;
	south?: Snippet;
	items: T[];
	'show-title'?: boolean;
	mode?: 'pine' | 'dual' | 'sake';
}
