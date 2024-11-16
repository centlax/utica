import { getContext, setContext } from 'svelte';
import {
	superForm,
	type FormFieldProxy,
	type FormOptions,
	type FormPathLeaves,
	type FormPathType,
	type SuperForm,
	type SuperValidated
} from 'sveltekit-superforms';

type OForm = Record<string, unknown>;

export function useForm<T extends OForm, M = any, In extends Record<string, unknown> = T>(
	schema: SuperValidated<T, M, In>,
	options?: FormOptions<T, M, In>
) {
	const proxy = superForm(schema, options);

	return {
		proxy,
		state: proxy.form,
		constraints: proxy.constraints,
		errors: proxy.errors,
		enhance: proxy.enhance,
		message: proxy.message
	};
}

export function ctxForm<T extends OForm, M = any, In extends Record<string, unknown> = T>() {
	type Proxy = SuperForm<T, M>;

	function set(proxy?: Proxy) {
		setContext('proxy', proxy);
	}

	function get() {
		return getContext<Proxy>('proxy');
	}

	return {
		set,
		get
	};
}

export function ctxField<T extends OForm, M = any, In extends Record<string, unknown> = T>() {
	type Proxy = FormFieldProxy<FormPathType<T, FormPathLeaves<T>>, FormPathLeaves<T>>;

	function set(proxy: Proxy) {
		setContext('proxy', proxy);
	}

	function get() {
		return getContext<Proxy>('proxy');
	}

	return {
		set,
		get
	};
}
