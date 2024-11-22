import { getContext, hasContext, setContext } from 'svelte';
import type { Action } from 'svelte/action';

/**
 * A generic type representing a builder with an action property.
 */
type SomeBuilder<Element, Param, Attributes extends Record<string, unknown>> = {
	action: Action<Element, Param, Attributes>;
};

/**
 * A utility function for managing context with a focus on toggleable states and reusable builders.
 * @param key - The context key to associate with this utility.
 */
export function ctxMelt<
	Builder extends SomeBuilder<Element, Param, Attributes>,
	Element extends HTMLElement,
	Attributes extends Record<string, unknown>,
	Param = never
>(key: string) {
	if (!key) throw new Error('Context key cannot be empty.');

	/**
	 * Sets a context with the provided builder value.
	 * @param value - The builder instance to store in the context.
	 */
	function set(value: Builder): void {
		setContext(key, value);
	}

	/**
	 * Checks if a context exists for the current key.
	 * @returns `true` if the context exists, `false` otherwise.
	 */
	function has(): boolean {
		return hasContext(key);
	}

	/**
	 * Retrieves a context value by its key.
	 * @returns The builder instance stored in the context.
	 */
	function get(): Builder {
		return getContext<Builder>(key);
	}

	return {
		set,
		get,
		has
	};
}
