<script lang="ts">
	/** Imports */
	import { type ContainerProps, container } from './container.js';
	import { useUI } from '$lib/utian/index.js';
	import { cn } from '$lib/utils/merge.js';
	import { stringify } from '$lib/utian/utils.js';

	/** Props */
	let { ...props }: ContainerProps = $props();

	/** Styles */
	const ui = useUI(container, props.class, props.override);
</script>

<div data-ui="layout" {...props} class={cn(stringify(ui.root), ui.class)}>
	{@render props.children()}
</div>
