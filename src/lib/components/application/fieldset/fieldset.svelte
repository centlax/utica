<script lang="ts">
	/** Imports */
	import { type FieldsetProps } from './fieldset.js';
	/** Props */
	let { ...props }: FieldsetProps = $props();
</script>

<fieldset {...props}>
	<div>
		{#if props.label}
			{@render props.label()}
		{/if}
		{#if props.hint && typeof props.hint !== 'string'}
			{@render props.hint()}
		{:else}
			<svelte:element this={props.href ? 'a' : 'span'}>
				{props.hint}
			</svelte:element>
		{/if}
	</div>

	{#if props.children}
		{@render props.children()}
	{/if}

	{#if props.error}
		{#if typeof props.error === 'string'}
			<p>{props.error}</p>
		{:else}
			{@render props.error()}
		{/if}
	{:else if props.help}
		{#if typeof props.help === 'string'}
			<p>{props.help}</p>
		{:else}
			{@render props.help()}
		{/if}
	{/if}
</fieldset>
