<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { HeaderMenuProps } from './menu.js';

	/** Imports */
	/** Props */
	let { ...props }: HeaderMenuProps = $props();
	/** Styles */
</script>

<!--
			'Product' flyout menu, show/hide based on flyout menu state.
  
			Entering: "transition ease-out duration-200"
			  From: "opacity-0 translate-y-1"
			  To: "opacity-100 translate-y-0"
			Leaving: "transition ease-in duration-150"
			  From: "opacity-100 translate-y-0"
			  To: "opacity-0 translate-y-1"
		  -->

{#if props.link && props.link.links}
	<div
		transition:slide
		class="mx-auto mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5"
	>
		<div class="p-4">
			{#each props.link.links as link}
				<div
					class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
				>
					<div
						class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
					>
						<svg
							class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
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
								d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
							/>
						</svg>
					</div>
					<div class="flex-auto">
						<a href="/" class="block font-semibold text-gray-900">
							{link.label}
							<span class="absolute inset-0"></span>
						</a>
						<p class="mt-1 text-gray-600">{link.description}</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
			<a
				href="/"
				class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
			>
				<svg
					class="h-5 w-5 flex-none text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
					data-slot="icon"
				>
					<path
						fill-rule="evenodd"
						d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
						clip-rule="evenodd"
					/>
				</svg>
				Watch demo
			</a>
			<a
				href="/"
				class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
			>
				<svg
					class="h-5 w-5 flex-none text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
					data-slot="icon"
				>
					<path
						fill-rule="evenodd"
						d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
						clip-rule="evenodd"
					/>
				</svg>
				Contact sales
			</a>
		</div>
	</div>
{/if}
