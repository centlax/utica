/** Imports */
import type { Styles } from '$lib/utian/types.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {
	root: {}
} satisfies Styles;
export const avatarGroup = styles;

/** Props */
type Props = HTMLAttributes<HTMLDivElement>;
export interface AvatarGroupProps extends Props {
	children?: Snippet;
	max?: number;
}
