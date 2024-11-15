<script lang="ts">
	/** Imports  */
	import { type ButtonProps } from './button.js';

	/** Props  */
	let { ...props }: ButtonProps = $props();

	/** Styles  */
</script>

<svelte:element {...props} this={props.href ? 'a' : 'button'} data-ui="button">
	{#if props.children}
		{@render props.children()}
	{:else}
		{props.label}
	{/if}
</svelte:element>
