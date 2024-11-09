<script lang="ts">
	import { createDialog, melt, createSync } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		content?: Snippet;
		value?: boolean;
	};
	let { value = $bindable(false), ...props }: Props = $props();

	const {
		elements: { overlay, content, portalled, trigger },
		states
	} = createDialog({
		forceVisible: true
	});
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
	<div class="" use:melt={$portalled}>
		<div
			use:melt={$overlay}
			class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
			transition:fade={{ duration: 150 }}
		></div>
		<div
			class="ffixed left-0 top-0 z-50 h-screen w-full max-w-[350px] bg-white p-6
            shadow-lg focus:outline-none"
			transition:fly={{
				x: -350,
				duration: 300,
				opacity: 1
			}}
			use:melt={$content}
		>
			{#if props.content}
				{@render props.content()}
			{/if}
		</div>
	</div>
{/if}
