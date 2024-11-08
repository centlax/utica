<script lang="ts" module>
	const {
		elements: { content },
		helpers,
		states: { toasts },
		actions: { portal }
	} = createToaster<Snippet>();
	export const help = helpers;
</script>

<script lang="ts">
	import { createToaster, melt } from '@melt-ui/svelte';
	import type { Snippet } from 'svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import type { Transition } from 'svelte/types/compiler/interfaces';

	
	let { ...props } = $props();
	function readTransitions(transition: Transition) {
		return {
			inFunc: transition.in ? transition.in.func : () => {},
			inOptions: transition.in ? transition.in.options : null,
			outFunc: transition.out ? transition.out.func : () => {},
			outOptions: transition.out ? transition.out.options : null
		};
	}
	// @ts-ignore
	const { inFunc, inOptions, outFunc, outOptions } = readTransitions(props.transition);
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
			in:inFunc={inOptions}
			out:outFunc={outOptions}
		>
			{@render data()}
		</div>
	{/each}
</div>
