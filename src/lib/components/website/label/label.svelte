<script lang="ts">
	/** Imports */
	import type { LabelProps } from './label.js';

	/** Props */
	let { ...props }: LabelProps = $props();

	/** Styles */
</script>

<label {...props}>
	{#if props.children}
		{@render props.children()}
	{:else}
		{props.text}
	{/if}
</label>
