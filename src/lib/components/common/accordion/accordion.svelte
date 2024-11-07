<script lang="ts">
	import type { AccordionLink } from '$lib/types/link.js';
	import { createAccordion, melt } from '@melt-ui/svelte';
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';

	type Props = {
		children?: Snippet;
		item?: Snippet;
		trigger?: Snippet;
		content?: Snippet;
		id: string;
		links?: AccordionLink;
	};
	let { id, ...props }: Props = $props();

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: 'item-1'
	});
</script>

<!-- <div use:melt={$root}></div> -->
<div use:melt={$item(id)}>
	<button use:melt={$trigger(id)}>
		{#if props.trigger}
			{@render props.trigger()}
		{/if}
	</button>

	{#if $isSelected(id)}
		<div use:melt={$content(id)} transition:slide>
			{#if props.content}
				{@render props.content()}
			{/if}
		</div>
	{/if}
</div>
