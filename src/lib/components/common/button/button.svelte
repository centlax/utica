<script lang="ts">
	/** Imports  */
	import { type ButtonProps, button } from './button.js';
	import { useUI, stringify } from '$lib/utian/index.js';
	import { merge } from '$lib/utils/merge.js';

	/** Props  */
	let { ...props }: ButtonProps = $props();

	/** Styles  */
	const { classer, css } = useUI(button, props.class, props.override);
</script>

<svelte:element
	this={props.href ? 'a' : 'button'}
	{...props}
	class={merge(stringify(css.root))}
	data-ui="button"
>
	{#if props.children}
		{@render props.children()}
	{:else}
		{props.label}
	{/if}
</svelte:element>
