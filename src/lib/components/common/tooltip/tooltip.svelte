<script lang="ts">
	import { createTooltip, melt, createSync } from '@melt-ui/svelte';
	import type { Snippet } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	type Props = {
		value?: boolean;
		trigger?: Snippet;
		children?: Snippet;
		content?: Snippet;
	};

	const {
		elements: { trigger, content, arrow },
		states
	} = createTooltip({
		positioning: {
			placement: 'top'
		},
		openDelay: 0,
		closeDelay: 0,
		closeOnPointerDown: false,
		forceVisible: true
	});
	let { value = $bindable(false), ...props }: Props = $props();

	const sync = createSync(states);

	$effect(() => {
		sync.open(value, (v) => (value = v));
	});
</script>

{#if props.children}
	<span use:melt={$trigger}>
		{@render props.children()}
	</span>
{/if}

{#if value}
	<div
		use:melt={$content}
		transition:slide={{axis: 'x'}}
		class="z-10 relative"
	>
		{#if props.content}
			{@render props.content()}
		{/if}
		<div use:melt={$arrow}></div>
	</div>
{/if}
