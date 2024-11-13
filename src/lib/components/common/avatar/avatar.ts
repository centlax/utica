/** Imports */
import type { CreateAvatarProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/** Styles */

/** Props */
type Props = HTMLAttributes<HTMLSpanElement>;
export interface AvatarProps extends Props {
	children?: Snippet;
	src?: CreateAvatarProps['src'];
	'delay-ms'?: CreateAvatarProps['delayMs'];
	'loading-status'?: CreateAvatarProps['loadingStatus'];
	alt?: string;
	text?: string;
	icon?: string;
	instant?: boolean;
}
