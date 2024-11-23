import type { LayoutLoad } from './$types.js';

import type { Link } from '$lib/types/link.js';

const heads: Link[] = [
	{ label: 'Product' },
	{
		title: 'Features',
		items: [
			{ label: 'Marketing', href: '/' },
			{ label: 'Analytics', href: '/' },
			{ label: 'Automation', href: '/' },
			{ label: 'Commerce', href: '/' },
			{ label: 'Insights', href: '/' }
		]
	},
	{ label: 'Marketplace' },
	{ label: 'Centlax' }
];
const foots: Link[] = [
	{
		title: 'Solutions',
		items: [
			{ label: 'Marketing', href: '/' },
			{ label: 'Analytics', href: '/' },
			{ label: 'Automation', href: '/' },
			{ label: 'Commerce', href: '/' },
			{ label: 'Insights', href: '/' }
		]
	},
	{
		title: 'Support',
		items: [
			{ label: 'Submit ticket', href: '/' },
			{ label: 'Documentation', href: '/' },
			{ label: 'Guides', href: '/' }
		]
	},
	{
		title: 'Company',
		items: [
			{ label: 'About', href: '/' },
			{ label: 'Blog', href: '/' },
			{ label: 'Jobs', href: '/' },
			{ label: 'Press', href: '/' }
		]
	},
	{
		title: 'Legal',
		items: [
			{ label: 'Terms of service', href: '/' },
			{ label: 'Privacy policy', href: '/' },
			{ label: 'License', href: '/' }
		]
	}
];

export const load: LayoutLoad = () => {
	return {
		heads,
		foots
	};
};
