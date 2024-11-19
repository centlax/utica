/** Imports */
import type { Snippet } from 'svelte';

/** Styles */
const styles = {};
export const dashboard = styles;

/** Props */
export interface DashLayoutProps {
	children: Snippet;
	north?: Snippet;
	south?: Snippet;
}
