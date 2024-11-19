/** Imports */
import type { BaseProps } from '$lib/types/prop.js';
import type { TransitionParams } from '$lib/types/transition.js';
import type { TransformKeysToKebab } from '$lib/types/utils.js';
import type { Styles } from '$lib/utian/types.js';
import type { CreateDialogProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { FadeParams, FlyParams } from 'svelte/transition';

/** Styles */
const styles = {
	root: {
		flex: ''
	},
	overlay: {
		flex: 'fixed inset-0 z-50 transition-colors bg-black/50 backdrop-blur-sm'
	},
	content: {
		flex: 'fixed  z-50 focus:outline-none'
	}
} satisfies Styles;
export const sheet = styles;

/** Props */
type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'> &
	Omit<TransformKeysToKebab<CreateDialogProps>, 'value' | 'onOpenChange' | 'ids'>;

export interface SheetProps extends BaseProps<typeof sheet>, Props {
	children?: Snippet;
	content?: Snippet;
	value?: boolean;
	transition?: TransitionParams<FlyParams>;
	'overlay-transition'?: TransitionParams<FadeParams>;
}
