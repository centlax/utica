<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { select, type SelectProps } from './select.js';

	/** Imports */
	let { ...props }: SelectProps = $props();

	/** Imports */
	const ui = useUI(select, props.class, props.override);
</script>

<select {...props} class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</select>
