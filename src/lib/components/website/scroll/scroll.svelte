<script lang="ts">
	import { createScrollArea, melt } from '@melt-ui/svelte';

	let { children } = $props();

	const {
		elements: { root, content, viewport, corner, scrollbarY, thumbY, thumbX, scrollbarX }
	} = createScrollArea({
		type: 'auto',
		dir: 'ltr'
	});
</script>

<div use:melt={$root} class="relative size-full overflow-hidden">
	<div use:melt={$viewport} class="h-full w-full rounded-[inherit]">
		<div use:melt={$content} class="size-full">
			{@render children()}
		</div>
	</div>
	<div
		use:melt={$scrollbarY}
		class="flex h-full w-2.5 touch-none select-none border-l border-l-transparent bg-primary-800/10 p-px transition-colors"
	>
		<div use:melt={$thumbY} class="relative flex-1 rounded-full bg-primary-600"></div>
	</div>
	<div
		use:melt={$scrollbarX}
		class="flex h-2.5 w-full touch-none select-none border-t border-t-transparent bg-primary-800/10 p-px"
	>
		<div use:melt={$thumbX} class="relative rounded-full bg-primary-600"></div>
	</div>
	<div use:melt={$corner}></div>
</div>
