<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { cn, colorize, st } from '$lib/utils/wind.js';
	import { checkbox, type CheckboxProps } from './checkbox.js';

	/** Props */
	let { ...props }: CheckboxProps = $props();

	/** Styles */
	const ui = useUI(checkbox, props.class, props.override);
</script>

<input {...props} style={colorize()} type="checkbox" class={cn(st(ui.root), ui.class)} />
