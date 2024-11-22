<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { stringify as st } from '$lib/utils/utils.js';
	import { cn } from '$lib/utils/merge.js';
	import { type DashMainProps, dashMain } from './main.js';

	/** Props */
	let { ...props }: DashMainProps = $props();

	/** Styles */
	const ui = useUI(dashMain, props.class, props.override);
</script>

<main data-ui="layout" {...props} class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</main>
