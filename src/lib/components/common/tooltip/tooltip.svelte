<script lang="ts">
	import { createTooltip, melt, createSync } from '@melt-ui/svelte';
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	type Props = {
		value?: boolean;
		trigger?: Snippet;
		children?: Snippet;
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

{#if props.trigger}
	<span use:melt={$trigger}>
		{@render props.trigger()}
	</span>
{/if}

{#if value}
	<div
		use:melt={$content}
		transition:fade={{ duration: 100 }}
		class="z-10 rounded-lg bg-red-500 shadow"
	>
		{@render props.children?.()}
		<div use:melt={$arrow}></div>
	</div>
{/if}
