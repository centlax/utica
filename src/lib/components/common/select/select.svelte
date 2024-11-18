<script lang="ts">
	/** Imports */
	import { type SelectProps } from './select.js';

	/** Props */
	let { ...props }: SelectProps = $props();
</script>

<select data-ui="control">
	{@render props.children?.()}
</select>
