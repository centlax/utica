import { getContext, setContext } from 'svelte';

export function useInput() {
	function set(value: unknown) {
		setContext('input', value);
	}

	function get() {
		const value = getContext<unknown>('value');
		return { value };
	}
	return {
		set,
		get
	};
}
