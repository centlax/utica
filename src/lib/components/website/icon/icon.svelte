<script lang="ts">
	/** Imports */
	import { icon, type IconProps } from './icon.js';
	import { cn } from '$lib/utils/merge.js';
	import { useUI } from '$lib/utian/index.js';
	import { stringify as st } from '$lib/utian/utils.js';

	/** Props */
	let { name, ...props }: IconProps = $props();

	/** Styles */
	const ui = useUI(icon, props.class, props.override);
</script>

<span data-ui="icon" {...props} class={cn(name, st(ui.root), ui.class)}></span>
