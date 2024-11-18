<script lang="ts">
	import { useToggle } from '$lib/composables/toggle.js';
	import { createTooltip, melt, createSync } from '@melt-ui/svelte';
	import type { TooltipProps } from './tooltip.js';
	import { cn } from '$lib/utils/merge.js';

	let { value = $bindable(false), ...props }: TooltipProps = $props();

	const {
		elements: { trigger, content, arrow },
		states
	} = createTooltip({
		positioning: props['floaf'],
		openDelay: props.delay?.open,
		closeDelay: props.delay?.close,
		arrowSize: props['arrow-size'],
		escapeBehavior: props['escape-behavior'],
		portal: props['portal'],
		closeOnPointerDown: props['close-pointer-down'],
		disableHoverableContent: props['disable-hover'],
		forceVisible: props['force-visible'],
		group: props['group']
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
	<div data-ui="tooltip" {...props} use:melt={$content} class={cn('relative z-10', props.class)}>
		{@render props.content?.()}
		{#if props['arrow-size']}
			<div use:melt={$arrow}></div>
		{/if}
	</div>
{/if}
