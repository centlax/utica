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
	<button use:melt={$trigger(id)} class="w-full">
		{@render props.trigger?.()}
	</button>

	{#if $isSelected(id)}
		<div use:melt={$content(id)} transition:slide>
			{@render props.content?.()}
		</div>
	{/if}
</div>
