import { getContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';

export function useTrigger() {
	function set(value: Writable<boolean>, on: unknown, off: unknown) {
		setContext('value', value);
		setContext('on', on);
		setContext('off', off);
	}

	function get() {
		const value = getContext<Writable<boolean>>('value');
		const on = getContext('on');
		const off = getContext('off');

		return { value, on, off };
	}

	function has() {}

	return {
		set,
		get,
		has
	};
}
