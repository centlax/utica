<script lang="ts">
	import { createDialog, melt, createSync } from '@melt-ui/svelte';
	import { fade, fly, type FlyParams } from 'svelte/transition';
	import { useToggle } from '$lib/composables/toggle.js';
	import { merge } from '$pkgs/ui/index.js';
	import type { SheetProps } from './sheet.js';

	let { value = $bindable(false), ...props }: SheetProps = $props();

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
	let containsDir: boolean = /right-|top-|bottom-/.test(props.class ?? '');
</script>

{@render props.children?.()}
{#if value}
	<div class="" use:melt={$portalled}>
		<div
			use:melt={$overlay}
			class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
			transition:fade={{ duration: 150 }}
		></div>
		<div
			{...props}
			class={merge(
				'fixed top-0 z-50 h-screen w-full max-w-[350px] bg-white p-6 shadow-lg focus:outline-none',
				!containsDir && 'left-0',
				props.class
			)}
			in:fly={{ x: '100%', duration: 500, opacity: 1 }}
			out:fly={{ x: '100%', duration: 500, opacity: 0 }}
			use:melt={$content}
		>
			{@render props.content?.()}
		</div>
	</div>
{/if}
