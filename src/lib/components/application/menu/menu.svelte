<script lang="ts">
	/** Imports */
	import { type MenuProps } from './menu.js';
	/** Props */
	let { as = 'li', ...props }: MenuProps = $props();
	/** Styles */
</script>

<svelte:element
	this={as}
	{...props}
	class="group flex cursor-default select-none items-center rounded-md px-3 py-2"
>
	<!-- Active: "text-white forced-colors:text-[Highlight]", Not Active: "text-gray-400" -->
	<svg
		class="h-6 w-6 flex-none text-gray-400"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		aria-hidden="true"
		data-slot="icon"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
		/>
	</svg>
	<span class="ml-3 flex-auto truncate">Add new file...</span>
	<!-- Active: "text-indigo-100", Not Active: "text-gray-400" -->
	<span class="ml-3 flex-none text-xs font-semibold text-gray-400"
		><kbd class="font-sans">⌘</kbd><kbd class="font-sans">N</kbd></span
	>
</svelte:element>
