import type { DeepStyles, Utility } from './types.js';
import type { ClassValue } from 'clsx';
/**
 * Merges multiple class lists into a single class string.
 *
 * @param classLists - The class lists to merge.
 * @returns The merged class string.
 *
 * The function joins every string from index 0 to (n-2) with twJoin,
 * then includes the last string separately in the twMerge.
 */
export declare function merge(...inputs: ClassValue[]): string;
/**
 * Converts multiple objects into a single string by concatenating non-object property values.
 * If the input is not an object, it returns an empty string.
 * @param {...Object} objs The objects to be converted into a string.
 * @returns A string representation of the non-object properties of the input objects.
 */
export declare function stringify(...objs: Utility[]): string;
/**
 * Recursively processes a style object, converting it into usable class strings and CSS objects.
 * If `styles` has a root object, it will merge the stringified root with the classer string.
 * @param {string | DeepStyles<T>} styles The styles object or string.
 * @param {boolean} override Whether the newer styles should override existing ones.
 * @returns An object with `css` and `classer` properties.
 */
export declare function useUI<T extends Record<string, unknown>>(
	styles?: string | DeepStyles<T>,
	override?: boolean
): {
	css: T;
	classer: string;
};
