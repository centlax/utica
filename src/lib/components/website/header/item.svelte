<script lang="ts">
	import { UTooltip, UToggle } from '$lib/index.js';
</script>

<div class="relative">
	<UTooltip>
		<UToggle>
			<button
				type="button"
				class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
				aria-expanded="false"
			>
				Product
				<svg
					class="h-5 w-5 flex-none text-gray-400"
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
			</button>
		</UToggle>

		{#snippet content()}
			sdf
		{/snippet}
	</UTooltip>
</div>

<a href="/" class="text-sm/6 font-semibold text-gray-900">Features</a>
<a href="/" class="text-sm/6 font-semibold text-gray-900">Marketplace</a>
<a href="/" class="text-sm/6 font-semibold text-gray-900">Company</a>
