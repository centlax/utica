import type { DeepStyles } from '$lib/utian/types.js';
export interface BaseProps<T> {
	class?: string | DeepStyles<T>;
	override?: boolean;
}
