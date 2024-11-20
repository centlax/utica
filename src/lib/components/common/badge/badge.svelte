<script lang="ts">
	/** Imports */
	import { type BadgeProps, badge } from './badge.js';
	import { useUI } from '$lib/utian/index.js';
	import { cn } from '$lib/utils/merge.js';
	import { stringify as st } from '$lib/utian/utils.js';

	/** Props */
	let { ...props }: BadgeProps = $props();

	/** Styles */
	const ui = useUI(badge, props.class, props.override);
</script>

<span data-ui="badge" {...props} class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</span>
