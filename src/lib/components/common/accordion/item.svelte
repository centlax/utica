<script lang="ts">
	/* Imports */
	import { melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { getContext } from 'svelte';
	import type { AccordionItemProps } from './item.js';

	/* Props */
	let { id, ...props }: AccordionItemProps = $props();

	/* Retrieve contexts set by the Accordion component */
	let item: any = getContext('item');
	let trigger: any = getContext('trigger');
	let selected: any = getContext('selected');
	let content: any = getContext('content');

	/* Styles */
</script>

<div data-ui="accordion-item" {...props} use:melt={$item(id)}>
	<div role="button" use:melt={$trigger(id)}>
		{@render props.children?.()}
	</div>

	{#if $selected(id)}
		<div use:melt={$content(id)} in:slide out:slide>
			{@render props.content?.()}
		</div>
	{/if}
</div>
