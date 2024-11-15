/** Imports */
import type { Styles } from '$lib/utian/types.js';
import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

/** Styles */
const styles = {} satisfies Styles;
export const sidebarItem = styles;

/** Props */
type HTMLButtunAnchorAttributes = HTMLButtonAttributes & HTMLAnchorAttributes;
export interface SidebarItemProps extends HTMLButtunAnchorAttributes {
	children?: Snippet;
}
