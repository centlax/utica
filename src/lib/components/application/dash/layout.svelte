<script lang="ts">
	/** Imports */
	import { type DashLayoutProps } from './layout.js';
	/** Props */
	let { ...props }: DashLayoutProps = $props();

	/** styles */
</script>

<div data-ui="dash-layout">
	{@render props.children()}
</div>
