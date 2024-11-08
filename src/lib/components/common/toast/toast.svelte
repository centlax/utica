<script lang="ts" module>
	export let props: ToastProps = {
		delay: 5000,
		type: 'foreground',
		hover: 'pause'
	};
	const {
		elements: { content },
		helpers,
		states: { toasts },
		actions: { portal }
	} = createToaster<ToastProps>({
		closeDelay: props.delay,
		type: props.type,
		hover: props.hover
	});
	export const help = helpers;
</script>

<script lang="ts">
	/** Imports */
	import { createToaster, melt } from '@melt-ui/svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import type { ToastProps } from './toast.js';

	/** Props */
	let { ...props }: ToastProps = $props();
</script>

<div
	use:portal
	class="fixed right-0 top-0 z-50 m-4 flex flex-col items-end gap-2 md:bottom-0 md:top-auto"
>
	{#each $toasts as { id, data } (id)}
		<div
			use:melt={$content(id)}
			{...props}
			animate:flip={{ duration: 500 }}
			in:fly={{ duration: 150, x: '100%' }}
			out:fly={{ duration: 150, x: '100%' }}
		>
			{#if data.snippet}
				{@render data.snippet()}
			{/if}
		</div>
	{/each}
</div>
