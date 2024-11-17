import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Snippet } from 'svelte';
import type { HTMLFormAttributes } from 'svelte/elements';
import type { FormOptions } from 'sveltekit-superforms';
import type { SuperForm, SuperValidated } from 'sveltekit-superforms/client';

const styles = {};
export const form = styles;

export type OForm = Record<string, unknown>;

export interface FormProps<T extends OForm, M = any, In extends Record<string, unknown> = T>
	extends HTMLFormAttributes {
	children?: Snippet;
	form?: Omit<SuperForm<T, M>, 'form'>;
}
