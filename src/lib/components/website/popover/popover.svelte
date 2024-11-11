<script lang="ts">
	import { useToggle } from '$lib/composables/toggle.js';
	import { createPopover, createSync, melt } from '@melt-ui/svelte';
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	type Props = {
		content?: Snippet;
		children?: Snippet;
		open?: boolean;
		arrow?: number;
	};

	let { open = false, ...props }: Props = $props();

	const {
		elements: { trigger, content, arrow, close },
		states
	} = createPopover({
		forceVisible: true
	});

	const sync = createSync(states);
	$effect(() => {
		sync.open(open, (v) => (open = v));
	});
	const toogle = useToggle();
	toogle.set(states.open, trigger, close);
</script>

{@render props.children?.()}

{#if open}
	<div use:melt={$content} transition:fade={{ duration: 100 }}>
		{#if props.arrow}
			<div use:melt={$arrow}></div>
		{/if}

		{@render props.content?.()}
	</div>
{/if}
