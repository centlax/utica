import type { DeepPartial } from '$lib/types/ui.js';

export const defaultConfig = {
	colors: {
		primary: 'sky',
		neutral: 'neutral',
		success: 'green',
		warning: 'yellow',
		danger: 'red',
		mask: [
			'red',
			'orange',
			'amber',
			'yellow',
			'lime',
			'green',
			'emerald',
			'teal',
			'cyan',
			'sky',
			'blue',
			'indigo',
			'violet',
			'purple',
			'fuchsia',
			'pink',
			'rose',
			/** added */
			'primary',
			'success',
			'warning',
			'danger'
		] as const,
		base: ['slate', 'zinc', 'cool', /** nuetral become warm */ 'stone'] as const
	}
};

export type DefaultConfig = typeof defaultConfig;
export type UserConfig = DeepPartial<typeof defaultConfig>;
