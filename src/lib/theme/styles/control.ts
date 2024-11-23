import type { BaseProps } from '$lib/types/prop.js';
import type { Styles } from '$lib/types/ui.js';
import { statify } from '$lib/utils/wind.js';
import type { Snippet } from 'svelte';

const styles = {
	root: {
		flex: 'block w-full',
		typography: 'text-neutral-900 dark:text-white placeholder:text-neutral-500  sm:text-sm/6',
		background: '',
		border: statify({
			default: 'rounded-md border-0 ring-1 ring-inset ring-neutral-300',
			focus: 'focus:ring-2 focus:ring-inset focus:ring-primary-600'
		}),
		spacing: 'py-1.5',
		sizing: 'w-full',
		effect: 'shadow-sm'
	},
	is: {},
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

export const control = styles;

export interface ControlProps extends BaseProps<typeof control> {
	children?: Snippet;
}
