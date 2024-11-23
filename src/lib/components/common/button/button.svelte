<script lang="ts">
	/** Imports  */
	import { useUI } from '$lib/composables/ui.js';
	import { stringify } from '$lib/utils/utils.js';
	import { cn } from '$lib/utils/merge.js';
	import { type ButtonProps, button } from './button.js';
	import { colorize } from '$lib/utils/color.js';

	/** Props  */
	let { variant = 'solid', color = 'color', size = 'md', ...props }: ButtonProps = $props();

	/** Styles  */
	const ui = useUI(button, props.class, props.override);
	let css = $state({
		button: stringify(
			ui.root,
			// @ts-ignore
			ui.opt.variant[variant][color],
			ui.opt.size[size]
		)
	});
</script>

<svelte:element
	this={props.href ? 'a' : 'button'}
	{...props}
	class={cn(css.button, ui.class)}
	data-ui="button"
	style={colorize('purple')}
>
	{#if props.children}
		{@render props.children?.()}
	{:else}
		{props.about}
	{/if}
</svelte:element>
