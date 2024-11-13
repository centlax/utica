<script lang="ts">
	import { useToggle } from '$lib/composables/toggle.js';
	import { createPopover, createSync, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import type { PopoverProps } from './popover.js';

	let { value = $bindable(false), ...props }: PopoverProps = $props();

	const {
		elements: { trigger, content, arrow, close, overlay },
		states
	} = createPopover({
		positioning: props['float'],
		disableFocusTrap: props['disable-focus-trap'],
		arrowSize: props['arrow-size'],
		escapeBehavior: props['escape-behavior'],
		closeOnOutsideClick: props['close-on-outerclick'],
		preventScroll: props['prevent-scroll'],
		portal: props['portal'] ?? 'body',
		forceVisible: props['force-visible'],
		defaultOpen: props['default-open']
	});

	const sync = createSync(states);
	$effect(() => {
		sync.open(value, (v) => (value = v));
	});
	const toogle = useToggle();
	toogle.set(states.open, trigger, close);
</script>

{@render props.children?.()}

{#if value}
	<div data-ui="popover" use:melt={$content} transition:fade={{ duration: 100 }}>
		{#if props['arrow-size']}
			<div use:melt={$arrow}></div>
		{/if}
		{@render props.content?.()}
	</div>
{/if}
