export default {
	colors: {
		primary: 'sky',
		secondary: 'indigo',
		gray: 'neutral',
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
		base: ['slate', /** gray become cool */ 'cool', 'zinc', 'neutral', 'stone'] as const
	}
};
