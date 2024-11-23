<script lang="ts">
	import { UBadge, UChip, UDashAside, UDashLayout, UDashMain, UIcon, ULabel } from '$lib/index.js';
	import type { Link } from '$lib/types/link.js';
	let { children } = $props();

	let mode: 'pine' | 'dual' | 'sake' = $state('pine');

	const links: Link<{
		icon?: string;
		badge?: string;
		identifier?: string;
	}>[] = [
		{
			title: 'GENERAL',
			items: [
				{
					label: 'Dashboard',
					icon: 'i-fluent-data-pie-24-regular',
					badge: '10',
					links: [
						{ label: 'Dashboard', icon: 'i-fluent-data-pie-24-regular', badge: '10' },
						{ label: 'Team', icon: 'i-fluent-people-team-24-regular' },
						{
							label: 'Projects',
							icon: 'i-fluent-document-folder-24-regular',
							badge: '+12'
						},
						{
							label: 'Calendar',
							icon: 'i-fluent-calendar-24-regular',
							badge: '+25'
						},
						{
							label: 'Reports',
							icon: 'i-fluent-data-usage-24-regular'
						}
					]
				},
				{
					label: 'Team',
					title: 'Team',
					icon: 'i-fluent-people-team-24-regular',
					items: [
						{ label: 'Engineering', icon: 'i-fluent-data-pie-24-regular', badge: '10' },
						{ label: 'Team', icon: 'i-fluent-people-team-24-regular' },
						{
							label: 'Human Resource',
							icon: 'i-fluent-document-folder-24-regular',
							badge: '+12'
						},
						{
							label: 'Customer Success',
							icon: 'i-fluent-calendar-24-regular',
							badge: '+25'
						},
						{
							label: 'Reports',
							icon: 'i-fluent-data-usage-24-regular'
						}
					]
				},
				{ label: 'Projects', icon: 'i-fluent-document-folder-24-regular', badge: '+12' },
				{ label: 'Calendar', icon: 'i-fluent-calendar-24-regular', badge: '+25' },
				{ label: 'Documents', icon: 'i-fluent-document-one-page-multiple-24-regular' },
				{ label: 'Reports', icon: 'i-fluent-data-usage-24-regular' }
			]
		},
		{
			title: 'PROJECTS',
			items: [
				{ label: 'Website redesign', identifier: 'W' },
				{ label: 'GraphQL API', identifier: 'G' },
				{ label: 'Customer migration guides', identifier: 'C' },
				{ label: 'Profit sharing program', identifier: 'P' }
			]
		}
	];
	// block rounded-md py-2 pl-9 pr-2 text-sm/6 text-gray-700 hover:bg-gray-50"
</script>

<UDashLayout>
	{#snippet aside()}
		<UDashAside bind:mode items={links}>
			{#snippet north()}
				<div class="flex h-16 shrink-0 items-center">
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/plus/img/logos/mark.svg?color=primary&5hade=600"
						alt="Your Company"
					/>
				</div>
			{/snippet}

			{#snippet title({ title })}
				<h3 class="text-xs/6 font-semibold text-gray-400">{title}</h3>
			{/snippet}

			{#snippet trigger({ icon, label, badge, identifier })}
				{#if icon}
					<UIcon class="size-6 shrink-0 text-sky-600" name={icon || ''} />
				{/if}
				{#if identifier}
					<span
						class="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[0.625rem] font-medium text-gray-400 group-hover:border-primary-500 group-hover:text-primary-500"
						>{identifier}</span
					>
				{/if}
				<span class="col-span-3" data-ui="label"> {label} </span>

				{#if badge}
					<UBadge aria-hidden="true">
						{badge}
					</UBadge>
				{/if}
			{/snippet}

			{#snippet content({ label, icon })}
				{#if (icon && mode === 'dual') || 'sake'}
					<UIcon class="size-6 shrink-0 text-sky-600" name={icon || ''} />
				{/if}
				{label}
			{/snippet}

			{#snippet south()}
				<div class=" mt-auto">
					<a
						href="/"
						class="flex w-full items-center gap-x-4 rounded-md px-2 py-1.5 text-sm/6 font-semibold text-neutral-600 hover:bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-400"
					>
						<img
							class="size-5 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
						<span class="sr-only">Your profile</span>
						<span aria-hidden="true">Tom Cook</span>
					</a>
				</div>
			{/snippet}
		</UDashAside>
	{/snippet}

	<UDashMain>
		{@render children()}
	</UDashMain>
</UDashLayout>
