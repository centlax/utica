/** Imports */
import type { CreateToasterProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';

/** Styles */
const styles = {};
export const toast = styles;
/** Props */
export interface ToastProps  {
	snippet?: Snippet;
	delay?: CreateToasterProps['closeDelay'];
	type?: CreateToasterProps['type'];
	hover?: CreateToasterProps['hover'];
}
