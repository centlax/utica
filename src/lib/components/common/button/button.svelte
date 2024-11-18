<script lang="ts">
	/** Imports  */
	import { useUI } from '$lib/utian/index.js';
	import { stringify } from '$lib/utian/utils.js';
	import { cn } from '$lib/utils/merge.js';
	import { type ButtonProps, button } from './button.js';

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
>
	{@render props.children?.()}
</svelte:element>
