import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Snippet } from 'svelte';
import type { HTMLFormAttributes } from 'svelte/elements';
import type { FormOptions } from 'sveltekit-superforms';
import type { SuperValidated } from 'sveltekit-superforms/client';

const styles = {};
export const form = styles;

export type OForm = Record<string, unknown>;
type BaseAttributes = Omit<HTMLFormAttributes, 'id'>;

export interface BaseFormProps<T extends OForm> extends BaseAttributes {
	children?: Snippet;
	schema: SuperValidated<T>;
	form?: any;
	//state: SuperFormData<OForm>;
}
type F = BaseFormProps<OForm> & FormOptions;
export type FormProps = TransformKeysToKebab<F>;
