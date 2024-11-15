import type { Snippet } from 'svelte';
import type { ActionReturn } from 'svelte/action';
import type { HTMLFormAttributes } from 'svelte/elements';
import type { SuperForm } from 'sveltekit-superforms';

const styles = {};
export const form = styles;

type Props = HTMLFormAttributes;
type OForm = Record<string, unknown>;
export interface FormProps<T extends OForm> extends Props {
	children?: Snippet;
	schema?: SuperForm<T>;
	use?: any;
}

/* export interface FormProps<T extends OForm> extends Props {
	children?: Snippet;
	schema?: FormSchema<T>;
	state?: Partial<T>;
	validate?: (state: Partial<T>) => Promise<FormError[]> | FormError[];
	'validate-on'?: FormInputEvents[];
	disabled?: boolean;
	on?: string;
	'on-submit'?:
		| ((event: FormSubmitEvent<T>) => void | Promise<void>)
		| (() => void | Promise<void>);
} */
