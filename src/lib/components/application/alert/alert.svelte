<script lang="ts">
	/** Imports */
	import type { AlertProps } from './alert.js';

	/** Props */
	let { ...props }: AlertProps = $props();

	/** styles */
</script>

<div>
	{@render props.children?.()}
</div>
