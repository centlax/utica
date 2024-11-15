<script lang="ts">
	/** Imports */
	import type { label, LabelProps } from './label.js';

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
	{#if props.hint}
		{#if typeof props.hint !== 'string'}
			{@render props.hint()}
		{:else}
			<svelte:element this={props.href ? 'a' : 'span'}>
				{props.hint}
			</svelte:element>
		{/if}
	{/if}
</label>
