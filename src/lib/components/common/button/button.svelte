<script lang="ts">
	/** Imports  */
	import { type ButtonProps } from './button.js';

	/** Props  */
	let { ...props }: ButtonProps = $props();

	/** Styles  */
</script>

<svelte:element this={props.href ? 'a' : 'button'}>
	{@render props.children?.()}
</svelte:element>
