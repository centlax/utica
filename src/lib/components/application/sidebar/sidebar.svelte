<script lang="ts">
	/** Imports */
	import type { SidebarProps } from './sidebar.js';

	/** Props */

	let { ...props }: SidebarProps = $props();
	/** Styles */
</script>

<aside data-ui="sidebar">
	<div>
		{@render props.north?.()}
	</div>
	<nav>
		{@render props.children?.()}
	</nav>
	<div>
		{@render props.south?.()}
	</div>
</aside>
