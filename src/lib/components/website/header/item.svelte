<script lang="ts">
	import type { HeaderItemProps } from './item.js';

	/** Imports */
	/** Props */
	let { ...props }: HeaderItemProps = $props();
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
{#if props.link}
		<button
			type="button"
			class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
			aria-expanded="false"
		>
			{props.link.title}
			{#if props.link.links}
				<svg
					class="size-5 flex-none text-gray-500"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
					data-slot="icon"
				>
					<path
						fill-rule="evenodd"
						d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
						clip-rule="evenodd"
					/>
				</svg>
			{/if}
		</button>
	
	
{/if}
