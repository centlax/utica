import { merge } from '$lib/utils/merge.js';
import type { DeepStyles, Utility } from './types.js';

// Array of allowed keys in the ClassType interface
const classTypeKeys = new Set([
	'layout',
	'flex',
	'grid',
	'spacing',
	'sizing',
	'typography',
	'background',
	'border',
	'effect',
	'filter',
	'table',
	'transition',
	'animation',
	'transform',
	'motion',
	'interactive',
	'svg',
	'accessible',
	'custom'
]);

/**
 * Converts multiple objects into a single string by concatenating non-object property values.
 * If the input is not an object, it returns an empty string.
 * @param {...Object} objs The objects to be converted into a string.
 * @returns A string representation of the non-object properties of the input objects.
 */
export function stringify(...objs: Utility[]): string {
	return objs
		.flatMap((obj) =>
			typeof obj === 'object' ? Object.values(obj).filter((value) => typeof value !== 'object') : []
		)
		.join(' ');
}

/**
 * Merges two class strings, conditionally overriding the older class with the newer one.
 * @param {string} older The existing class string.
 * @param {string} newer The new class string to merge.
 * @param {boolean} override Whether the new class should override the older one.
 * @returns The merged class string.
 */
function overrideMerge(older: string, newer: string, override?: boolean): string {
	return override ? newer : merge(older, newer);
}

/**
 * Merges the given styles and oclass objects.
 * @template T - The type of the styles object.
 * @param {T} styles - The base styles object.
 * @param {string | DeepStyles<T>} oclass - The additional styles object or a string class.
 * @param {boolean} override - Flag indicating whether to override styles.
 * @returns {{ css: T; classer: string }} - The merged styles and class string.
 */
export function useUI<T extends Record<string, unknown>>(
	styles: T,
	oclass: string | undefined | DeepStyles<T>,
	override: boolean | undefined
): { css: T; classer: string } {
	let classer: string = '';
	const css: T = { ...styles };

	if (typeof oclass === 'string') {
		classer = oclass;
		return { css, classer };
	}

	for (const key in oclass) {
		if (Object.prototype.hasOwnProperty.call(oclass, key)) {
			const stylesKid = styles[key];
			const oclassKid = oclass[key];

			if (
				typeof stylesKid === 'object' &&
				stylesKid !== null &&
				typeof oclassKid === 'object' &&
				oclassKid !== null
			) {
				css[key] = useUI(
					stylesKid as Record<string, unknown>,
					oclassKid as DeepStyles<typeof stylesKid>,
					override
				).css as T[Extract<keyof T, string>];
			} else if (typeof oclassKid === 'string' && classTypeKeys.has(key)) {
				css[key] = overrideMerge(stylesKid as string, oclassKid, override) as T[Extract<
					keyof T,
					string
				>];
			}
		}
	}

	return { css, classer };
}
