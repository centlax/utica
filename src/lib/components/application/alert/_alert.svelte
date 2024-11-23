<script lang="ts">
	/** Imports */
	import { type AlertProps, alert } from './alert.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';

	/** Props */
	let { title, ...props }: AlertProps = $props();

	/** styles */
	const ui = useUI(alert, props.class, props.override);
</script>

<div {...props} class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
	<div></div>
	<div class="ml-3 w-0 flex-1 pt-0.5">
		{#if typeof title === 'string'}
			<p class="text-sm font-medium text-gray-900">Successfully saved!</p>
		{:else}
			{@render title?.()}
		{/if}
		<p class="mt-1 text-sm text-gray-500">Anyone with a link can now view this file.</p>
	</div>
</div>
