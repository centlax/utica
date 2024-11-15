/** Imports */

import type { Styles } from '$lib/utian/types.js';
import type { CreatePopoverProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */
const styles = {} satisfies Styles;
export const popover = styles;

/** Props */
type Props = HTMLAttributes<HTMLDivElement>;
export interface PopoverProps extends Props {
	children?: Snippet;
	content?: Snippet;
	float?: CreatePopoverProps['positioning'];
	'disable-focus-trap'?: CreatePopoverProps['disableFocusTrap'];
	'arrow-size'?: CreatePopoverProps['arrowSize'];
	'escape-behavior'?: CreatePopoverProps['escapeBehavior'];
	'close-outer-click'?: CreatePopoverProps['closeOnOutsideClick'];
	'prevent-scroll'?: CreatePopoverProps['preventScroll'];
	portal?: CreatePopoverProps['portal'];
	'force-visible'?: CreatePopoverProps['forceVisible'];
	'default-open'?: CreatePopoverProps['defaultOpen'];
	value?: boolean;
}
