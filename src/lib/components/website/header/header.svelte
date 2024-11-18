<script lang="ts">
	/** Imports */
	import { UHeaderAside, UHeaderItem, USheet, UToggle } from '$lib/index.js';
	import { useUI } from '$lib/utian/index.js';
	import { stringify } from '$lib/utian/utils.js';
	import { cn } from '$lib/utils/merge.js';
	import { type HeaderProps, header } from './header.js';

	/** Props */
	let { ...props }: HeaderProps = $props();

	/** Styles */
	const ui = useUI(header, props.class, props.override);
</script>

<header {...props} class={cn(stringify(ui.root), ui.class)} aria-label="global">
	<div class={stringify(ui.west)}>
		{@render props.west?.()}
	</div>
	<nav class={stringify(ui.center)}>
		{#if props.children}
			{@render props.children()}
		{:else}
			<UHeaderItem />
		{/if}
	</nav>
	<div class={stringify(ui.east)}>
		{@render props.east?.()}
	</div>
</header>
