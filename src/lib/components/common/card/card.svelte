<script lang="ts">
	/** Imports */
	import { type CardProps } from './card.js';
	/** Props */
	let { ...props }: CardProps = $props();
	/** Styles */
</script>

<div data-ui="card" {...props}>
	{#if props.north}
		<div>{@render props.north()}</div>
	{/if}
	{#if props.children}
		<div>{@render props.children()}</div>
	{/if}
	{#if props.south}
		<div>{@render props.south()}</div>
	{/if}
</div>
