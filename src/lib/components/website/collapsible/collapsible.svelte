<script lang="ts">
	/** Imports */
	import { createCollapsible, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import type { CollapsibleProps } from './collapsible.js';

	/** Props */
	let { ...props }: CollapsibleProps = $props();

	const {
		elements: { root, content, trigger },
		states: { open }
	} = createCollapsible({
		forceVisible: true
	});
</script>

<div use:melt={$root} class="relative mx-auto mb-28 w-[18rem] max-w-full sm:w-[25rem]">
	<span class="text-magnum-900 text-sm font-semibold"> @thomasglopes starred 3 repositories </span>
	<div>
		<button
			class="text-magnum-800 relative h-6 w-6 place-items-center rounded-md bg-white
        text-sm shadow hover:opacity-75 data-[disabled]:cursor-not-allowed
        data-[disabled]:opacity-75"
			aria-label="Toggle"
			use:melt={$trigger}
		>
			<div class="abs-center">
				{#if $open}
					X
				{:else}
					UPDN
				{/if}
			</div>
		</button>
	</div>

	<div class="my-2 rounded-lg bg-white p-3 shadow">
		<span class="text-base text-black">melt-ui/melt-ui</span>
	</div>
	<div>
		{#if $open}
			<div use:melt={$content} transition:slide>
				{#if props.children}
					{@render props.children()}
				{/if}
			</div>
		{/if}
	</div>
</div>
