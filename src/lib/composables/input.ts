import { getContext, hasContext, setContext } from 'svelte';

export function ctxInput() {
	const key = 'melt';
	function set(value: unknown) {
		setContext(key, value);
	}

	function has() {
		return hasContext(key);
	}

	function get() {
		return getContext<unknown>(key);
	}

	return {
		set,
		has,
		get
	};
}
