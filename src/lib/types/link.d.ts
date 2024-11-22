import type { HTMLAnchorAttributes } from 'svelte/elements';

export interface Link<T extends Record<string, unknown> = unknown> extends HTMLAnchorAttributes, T {
	/**
	 * Label for the link
	 */
	label?: string;

	/**
	 * Description for the link
	 */
	description?: string;

	/**
	 * Nested links for hierarchical structures
	 */
	links?: Link<T>[];

	/**
	 * Alternative property for nested links
	 */
	items?: Link<T>[];

	[key?: string]: unknown;
}
