<script lang="ts">
	import { UModal, UScroll, USelectMenu, USheet, UToggle } from '$lib/index.js';
	import type { Link } from '$lib/types/link.js';

	const options: Link[] = [
		{
			title: 'Sweet',
			items: [
				{ label: 'Caramel' },
				{ label: 'Chocolate' },
				{ label: 'Strawberry' },
				{ label: 'Cookies & Cream' }
			]
		},
		{
			title: 'Savory',
			items: [{ label: 'Basil' }, { label: 'Bacon' }, { label: 'Rosemary' }]
		}
	];
</script>

<section class="flex items-center justify-center overflow-x-hidden">
	<div>ACTION TEST</div>
	<USheet>
		<UToggle>open</UToggle>
		{#snippet content()}
			<div
				class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
			>
				<div>
					<div class="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
						<svg
							class="size-6 text-green-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
						</svg>
					</div>
					<div class="mt-3 text-center sm:mt-5">
						<h3 class="text-base font-semibold text-gray-900" id="modal-title">
							Payment successful
						</h3>
						<div class="mt-2">
							<p class="text-sm text-gray-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
							</p>
						</div>
					</div>
				</div>
				<div class="mt-5 sm:mt-6">
					<UToggle>
						<button
							type="button"
							class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Go back to dashboard</button
						>
					</UToggle>
				</div>
			</div>
		{/snippet}
	</USheet>
</section>
