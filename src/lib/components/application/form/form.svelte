<script lang="ts" generics="T extends Record<string, unknown>">
	/** Imports */
	import { type FormProps } from './form.js';
	import { setContext } from 'svelte';

	/** Props */
	let { ...props }: FormProps<T> = $props();
	setContext('schema', props.schema);
</script>

<form use:props.use {...props}>
	{@render props.children?.()}
</form>
