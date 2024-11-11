/** Imports */
import type { CreateTooltipProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {};
export const tooltip = styles;

/** Props */
type Props = HTMLAttributes<HTMLDivElement>;
export interface TooltipProps extends Props {
	children?: Snippet;
	content?: Snippet;
	value?: boolean;
	portal?: CreateTooltipProps['portal'],
    floaf?: CreateTooltipProps['positioning']
}
