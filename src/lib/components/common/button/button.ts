import type { HTMLButtonAttributes } from 'svelte/elements';

export const styles = {
	root: {},
	is: {},
	opt: {
		variant: {}
	}
};

export interface ButtonProps extends HTMLButtonAttributes {
	label?: string;
}
