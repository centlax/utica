<script lang="ts">
	/** Imports */
	import { type HeaderProps } from './header.js';

	/** Props */
	let { ...props }: HeaderProps = $props();
	/** Styles */
</script>

{#snippet logo()}
	<a href="/" class="-m-1.5 p-1.5">
		<span class="sr-only">Your Company</span>
		<img
			class="h-8 w-auto"
			src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
			alt=""
		/>
	</a>
{/snippet}

<header class="w-full bg-white" {...props}>
	<nav class="flex items-center justify-between" aria-label="Global">
		{#if props.children}
			{@render props.children()}
		{/if}
	</nav>
	<aside>
		{#if props.aside}
			{@render props.aside()}
		{/if}
	</aside>
</header>
