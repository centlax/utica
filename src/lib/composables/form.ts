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
export function useForm<T extends OForm>(schema: SuperValidated<T>, options?: FormOptions) {
	const proxy = superForm(schema, options);
	return {
		state: proxy.form,
		proxy,
		errors: proxy.errors,
		enhance: proxy.enhance,
		message: proxy.message
	};
}

export function ctxForm() {
	type Proxy = SuperForm<Record<string, unknown>, any>;
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

export function ctxField<T extends OForm>() {
	type Proxy = FormFieldProxy<
		FormPathType<Record<string, unknown>, FormPathLeaves<T>>,
		FormPathLeaves<T>
	>;
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
