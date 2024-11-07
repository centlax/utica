<script lang="ts">
	import { UInputDate, UAccordion, UCalendar, UPopover, UContentTable } from '$lib/index.js';
	const items = [
		{
			id: 'item-1',
			title: 'What is it?',
			description:
				'A collection of accessible & unstyled component builders for Svelte applications.'
		},
		{
			id: 'item-2',
			title: 'Can I customize it?',
			description: 'Totally, it is 100% stylable and overridable.'
		},
		{
			id: 'item-3',
			title: 'Svelte is awesome, huh?',
			description: 'Yes, and so are you!'
		}
	];
</script>

<UContentTable/>
<section class="flex h-screen w-full items-center justify-center">
	<div class="max-w-lg">
		<UInputDate />
	</div>
	<div class="mt-10 hidden w-32">
		{#each items as { id, title, description }, i}
			<UAccordion {id}>
				{#snippet trigger()}
					{title}
				{/snippet}
				{#snippet content()}
					{description}
				{/snippet}
			</UAccordion>
		{/each}
	</div>
</section>
