<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import { type Item } from '$lib/types/item.js';
	import { useUI } from '$lib/composables/ui.js';
	import { stringify as st } from '$lib/utils/utils.js';
	import { cn } from '$lib/utils/merge.js';
	import { siteHead, type SiteHeadProps } from './header.js';

	/** Props */
	let { items, ...props }: SiteHeadProps<T> = $props();

	/** Styles */
	const ui = useUI(siteHead, props.class, props.override);
</script>

<header class={cn(st(ui.root), ui.class)}>
	<div class={st(ui.west)}>
		{@render props.west?.()}
	</div>
	<nav class={st(ui.center)}>
		{#each items as item}
			{@render props.trigger?.(item)}
		{/each}
	</nav>
	<div class={st(ui.east)}>
		{@render props.east?.()}
	</div>
</header>
