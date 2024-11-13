<script lang="ts">
	/** Imports */
	import { type SidebarItemProps } from './item.js';

	/** Props */
	let { ...props }: SidebarItemProps = $props();
</script>

<svelte:element this={props.href ? 'a' : 'button'}> 
    {@render props.children?.()}
</svelte:element>
