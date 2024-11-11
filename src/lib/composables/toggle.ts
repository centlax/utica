import { getContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';

export function useToggle() {
	function set(value: Writable<boolean>, on: unknown, off: unknown) {
		setContext('value', value);
		setContext('on', on);
		setContext('off', off);
	}

	function get() {
		const value = getContext<Writable<boolean>>('value');
		const on = getContext('on');
		const off = getContext('off');

		if (!value || on === undefined || off === undefined) {
			throw new Error(
				"The 'toggle' context values ('value', 'on', 'off') are not available. Ensure 'set' has been called."
			);
		}

		return { value, on, off };
	}

	return {
		set,
		get
	};
}
