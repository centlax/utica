<script lang="ts">
	/** Imports */
	import { type ContainerProps } from './container.js';
	/** Props */
	let { ...props }: ContainerProps = $props();
	/** Styles */
</script>

<div {...props}>
	{@render props.children()}
</div>
