import type { State, Utility } from '../types/ui.js';

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

export function statify(state: State): string {
	return state && typeof state === 'object'
		? Object.values(state)
				.filter((value) => typeof value !== 'object')
				.join(' ')
		: '';
}

/* type Variant = {
	color: Utility; // Primary key representing the default color variant.
	[key: string]: Utility; // Any additional keys representing other color variants.
};
 */
/**
 * Function to retrieve the appropriate `ClassType` based on the given color from a variant object.
 *
 * @param variant - The variant object containing different color variants.
 * @param color - The key representing the desired color variant.
 * @returns The `ClassType` corresponding to the given color, or the default color if the color is not found.
 * @throws Will throw an error if the `variant` is not a non-null object.
 */
/* export function variantify(variant: Variant, color: any): Utility {
	// Check if the variant is a valid non-null object.
	if (!variant || typeof variant !== 'object') {
		throw new Error('Invalid object input. Object must be a non-null object.');
	}
	// Check if the color is a valid key within the variant object.
	// If not, return the default color variant.
	if (!color || !Object.keys(variant).includes(color)) {
		return variant.color;
	}
	// Return the `ClassType` associated with the specified color.
	return variant[color];
}
 */