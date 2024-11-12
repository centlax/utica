<script lang="ts">
	import { useToggle } from '$lib/composables/toggle.js';
	import { createTooltip, melt, createSync } from '@melt-ui/svelte';
	import type { TooltipProps } from './tooltip.js';
	import { merge } from '$pkgs/ui/index.js';

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
	<div {...props} use:melt={$content} class={merge('relative z-10', props.class)}>
		{@render props.content?.()}
		<div use:melt={$arrow}></div>
	</div>
{/if}
