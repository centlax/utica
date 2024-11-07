<script lang="ts">
	/** Imports */
	import { type FormProps } from './form.js';

	/** Props */
	let { ...props }: FormProps = $props();
</script>

<form {...props}>
	{#if props.children}
		{@render props.children()}
	{/if}
</form>
