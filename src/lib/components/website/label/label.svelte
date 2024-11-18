<script lang="ts">
	import { getContext } from 'svelte';
	/** Imports */
	import type { label, LabelProps } from './label.js';

	/** Props */
	let { ...props }: LabelProps = $props();

	/** Styles */
	let name: string = getContext('for');
</script>

<label {...props} for={props.for || name}>
	{#if props.children}
		{@render props.children()}
	{:else}
		{props.about}
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
