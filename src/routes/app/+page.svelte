<script lang="ts">
	import { USidebar } from '$lib/import.js';
	import type { Link } from '$lib/types/link.js';
	const links: Link[] = [
		{
			label: 'General',
			links: [
				{ label: 'Overview', href: '', icon: 'i-fluent-data-pie-24-regular' },
				{ label: 'Profile', href: 'me', icon: 'i-fluent-person-ribbon-24-regular' },

				{
					label: 'Applications',
					href: 'apps',
					icon: 'i-fluent-apps-24-regular'
				},
				{
					label: 'Activities',
					href: 'activities',
					icon: 'i-fluent-data-usage-24-regular'
				},
				{
					label: 'Members',
					href: 'members',
					icon: 'i-fluent-people-community-24-regular'
				},
				{
					label: 'Units',
					href: 'units',
					icon: 'i-fluent-layer-diagonal-24-regular'
				},
				{
					label: 'Privacy',
					href: 'privacy',
					icon: 'i-fluent-fingerprint-24-regular'
				},
				{
					label: 'Security',
					href: 'security',
					icon: 'i-fluent-shield-keyhole-24-regular'
				},
				{
					label: 'Billing',
					href: 'billing',
					icon: 'i-fluent-wallet-credit-card-24-regular'
				}
			]
		},
		{
			label: 'Configuration',
			links: [
				{ label: 'Settings', href: 'settings', icon: 'i-fluent-settings-24-regular' },
				{
					label: 'Support',
					href: 'https://support.centlax.com/account',
					icon: 'i-fluent-person-support-24-regular'
				}
			]
		}
	];
</script>

<USidebar {links} />
