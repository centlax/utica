<script lang="ts">
	import { createScrollArea, melt } from '@melt-ui/svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
	};

	let { ...props }: Props = $props();
	const {
		elements: { root, content, viewport, corner, scrollbarY, thumbY, thumbX, scrollbarX }
	} = createScrollArea({
		type: 'hover',
		dir: 'ltr'
	});
</script>

<div
	use:melt={$root}
	class="relative h-72 w-52 overflow-hidden rounded-md border bg-white text-sky-900 shadow-lg"
>
	<div use:melt={$viewport} class="h-full w-full rounded-[inherit]">
		<div use:melt={$content}>
			{#if props.children}
				{@render props.children()}
			{/if}
		</div>
	</div>
	<div
		use:melt={$scrollbarY}
		class="flex h-full w-2.5 touch-none select-none border-l border-l-transparent bg-sky-800/10 p-px transition-colors"
	>
		<div use:melt={$thumbY} class="relative flex-1 rounded-full bg-sky-600"></div>
	</div>
	<div
		use:melt={$scrollbarX}
		class="flex h-2.5 w-full touch-none select-none border-t border-t-transparent bg-sky-800/10 p-px"
	>
		<div use:melt={$thumbX} class="relative rounded-full bg-sky-600"></div>
	</div>
	<div use:melt={$corner}></div>
</div>
