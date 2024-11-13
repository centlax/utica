/** Imports */
import type { CreatePaginationProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';

/** Styles */
const styles = {};
export const paginate = styles;

/** Props */
export interface PaginateProps {
	children?: Snippet;
	ellipsis?: Snippet;
	prev?: Snippet;
	next?: Snippet;
	/** The total number of items. */
	count?: CreatePaginationProps['count'];
	'default-page'?: CreatePaginationProps['defaultPage'];
	'sibling-count'?: CreatePaginationProps['siblingCount'];
	/** The number of items per page. */
	'per-page'?: CreatePaginationProps['perPage'];
	value?: CreatePaginationProps['page'];
}
