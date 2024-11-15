/** Imports */
import type { Styles } from '$lib/utian/types.js';
import type { Snippet } from 'svelte';
import type { HTMLInputAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {
		flex: 'block w-full',
		typography: 'text-neutral-900 dark:text-white placeholder:text-neutral-500  sm:text-sm/6',
		background: '',
		border: {
			default: 'rounded-md border-0 ring-1 ring-inset ring-neutral-300',
			focus: 'focus:ring-2 focus:ring-inset focus:ring-primary-600'
		},
		spacing: 'py-1.5',
		sizing: 'w-full',
		effect: 'shadow-sm'
	},
	is: {},
	//outline: 'text-[var(--ui-text-highlighted)] bg-[var(--ui-bg)] ring ring-inset ring-[var(--ui-border-accented)]',
	//soft: 'text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-elevated)]/50 hover:bg-[var(--ui-bg-elevated)] focus:bg-[var(--ui-bg-elevated)] disabled:bg-[var(--ui-bg-elevated)]/50',
	//subtle: 'text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-elevated)] ring ring-inset ring-[var(--ui-border-accented)]',
	//ghost: 'text-[var(--ui-text-highlighted)] bg-transparent hover:bg-[var(--ui-bg-elevated)] focus:bg-[var(--ui-bg-elevated)] disabled:bg-transparent dark:disabled:bg-transparent',
	//none: 'text-[var(--ui-text-highlighted)] bg-transparent'
	opt: {
		variant: {
			outline: {
				typography: ''
			},
			soft: {
				typography: ''
			},
			subtle: {
				typography: ''
			},
			ghost: {
				typography: ''
			},
			none: {
				typography: ''
			}
		},
		size: {
			xs: {
				spacing: 'px-2.5 py-1.5'
			},
			sm: {
				spacing: 'px-2 py-1'
			},
			md: {
				spacing: 'px-2.5 py-1.5'
			},
			lg: {
				spacing: 'px-2.5 py-1.5'
			},
			xl: {
				spacing: 'px-2.5 py-1.5'
			}
		}
	}
} satisfies Styles;
export const inputPin = styles;

/** Props */
type Props = HTMLInputAttributes;
export interface InputProps extends Props {
	children?: Snippet;
	as?: string;
}
