<script lang="ts">
	/** Imports */
	import type { LabelProps } from './label.js';
	import { Label } from 'formsnap';

	/** Props */
	let { ...props }: LabelProps = $props();

	/** Styles */
</script>

<Label {...props}>
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
</Label>
