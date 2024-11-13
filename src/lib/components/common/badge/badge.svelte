<script lang="ts">
	/** Imports */
	import type { BadgeProps } from './badge.js';

	/** Props */
	let { ...props }: BadgeProps = $props();
	/** Styles */
</script>

<span data-ui="badge" {...props}>
	{@render props.children?.()}
</span>
