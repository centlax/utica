<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/utian/index.js';
	import { stringify as st } from '$lib/utian/utils.js';
	import { cn } from '$lib/utils/merge.js';
	import { select, type SelectProps } from './select.js';

	/** Imports */
	let { ...props }: SelectProps = $props();

	/** Imports */
	const ui = useUI(select, props.class, props.override);
</script>

<select {...props} class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</select>
