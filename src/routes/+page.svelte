<script lang="ts">
	import { UHeader, UPaginate } from '$lib/index.js';
	import type { Link } from '$lib/types/link.js';
	/** transition */

	const links: Link[] = [
		{
			label: 'Documentation',
			icon: 'i-heroicons-book-open',
			href: '/getting-started'
		},
		{
			label: 'Playground',
			icon: 'i-simple-icons-stackblitz',
			href: '/playground'
		},
		{
			label: 'Roadmap',
			icon: 'i-heroicons-map',
			href: '/roadmap'
		},
		{
			label: 'Pro',
			icon: 'i-heroicons-square-3-stack-3d',
			href: '/pro'
		},
		{
			label: 'Releases',
			icon: 'i-heroicons-rocket-launch',
			href: 'https://github.com/nuxt/ui/releases',
			target: '_blank'
		}
	];
</script>

<section class="flex h-screen w-screen flex-col overflow-hidden bg-white px-8">
	<UHeader {links}>
		{#snippet logo()}
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Your Company</span>
				<img
					class="h-8 w-auto"
					src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
					alt=""
				/>
			</a>
		{/snippet}
	</UHeader>
	<UPaginate />
</section>
