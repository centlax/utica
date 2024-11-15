<script lang="ts">
	import { setContext } from 'svelte';
	/** Imports */
	import { type FieldProps } from './field.js';
	/** Props */
	let { ...props }: FieldProps = $props();
</script>

<fieldset {...props}>
	{@render props.children?.()}

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
