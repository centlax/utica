<script lang="ts">
	import { useToast } from '$lib/composables/toast.js';
	import { useToggle } from '$lib/composables/toggle.js';
	import { createTooltip, melt, createSync } from '@melt-ui/svelte';
	import type { Snippet } from 'svelte';
	import type { TooltipProps } from './tooltip.js';

	let { value = $bindable(false), ...props }: TooltipProps = $props();

	const {
		elements: { trigger, content, arrow },
		states
	} = createTooltip({
		positioning: props['floaf'],
		openDelay: 0,
		closeDelay: 0,
		forceVisible: true,
		group: true
	});

	const sync = createSync(states);

	$effect(() => {
		sync.open(value, (v) => (value = v));
	});
	const toggle = useToggle();
	toggle.set(states.open, trigger, trigger);
</script>

{@render props.children?.()}

{#if value}
	<div use:melt={$content} class="relative z-10 bg-white ring-1">
		{#if props.content}
			{@render props.content()}
		{/if}
		<div  use:melt={$arrow}></div>
	</div>
{/if}
