<script lang="ts">
	import { createDialog, melt, createSync } from '@melt-ui/svelte';
	import { flyAndScale } from '$lib/theme/transition/fly-scale.js';
	import { fade } from 'svelte/transition';
	import type { Snippet } from 'svelte';
	import { setContext } from 'svelte';
	import { useToggle } from '$lib/composables/toggle.js';

	type Props = {
		children?: Snippet;
		content?: Snippet;
		value?: boolean;
	};
	let { value = $bindable(false), ...props }: Props = $props();

	const {
		elements: { overlay, content, portalled, trigger, close },
		states
	} = createDialog({
		forceVisible: true
	});

	const sync = createSync(states);
	$effect(() => {
		sync.open(value, (v) => (value = v));
	});

	const toogle = useToggle();
	toogle.set(states.open, trigger, close);
</script>

{#if value}
	<div class="" use:melt={$portalled}>
		<div
			use:melt={$overlay}
			class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
			transition:fade={{ duration: 150 }}
		></div>
		<div
			class="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
			transition:flyAndScale={{
				duration: 150,
				y: 8,
				start: 0.96
			}}
			use:melt={$content}
		>
			{#if props.content}
				{@render props.content()}
			{/if}
		</div>
	</div>
{/if}
