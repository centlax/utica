<script lang="ts">
	import { createPopover, createSync, melt } from '@melt-ui/svelte';
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	type Props = {
		content?: Snippet;
		children?: Snippet;
		open?: boolean;
		arrow?: number;
	};

	let { open = $bindable(false), ...props }: Props = $props();

	const {
		elements: { trigger, content, arrow },
		states
	} = createPopover({
		forceVisible: true,
		arrowSize: props.arrow
	});

	const sync = createSync(states);
	$effect(() => {
		sync.open(open, (v) => (open = v));
	});
</script>

{#if props.children}
	<span use:melt={$trigger}>
		{@render props.children()}
	</span>
{/if}

{#if open}
	<div use:melt={$content} transition:fade={{ duration: 100 }}>
		{#if props.arrow}
			<div use:melt={$arrow}></div>
		{/if}
		{#if props.content}
			{@render props.content()}
		{/if}
	</div>
{/if}
