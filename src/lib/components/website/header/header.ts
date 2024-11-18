/** Imports */
import type { Link } from '$lib/types/link.js';
import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/utian/types.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		layout: '[&_*[data-state=show]]:lg:flex [&_*[data-state=hide]]:flex',
		flex: ' [&_*[data-state=show]]:hidden [&_*[data-state=hide]]:lg:hidden',
		background: ' bg-white',
		sizing: 'w-full'
	},
	west: {
		flex: '"mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
	},
	center: {},
	east: {}
} satisfies Styles;
export const header = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLElement>, 'class'>;
export interface HeaderProps extends BaseProps<typeof header>, Props {
	links?: Link[];
	children?: Snippet;
	west?: Snippet;
	east?: Snippet;
	aside?: Snippet;
}
