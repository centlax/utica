<script lang="ts">
	import { UModal, USheet, UToggle, UTooltip } from '$lib/index.js';
	/** transition */
</script>

<section class="h-screen w-screen flex justify-center items-center bg-white px-8">
	<UTooltip floaf={{placement: 'left-end'}} >
		<UToggle class="bg-sky-500">
			<button
				type="button"
				class="inline-flex w-fit justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
				>Open</button
			>
		</UToggle>
		{#snippet content()}
			<div
				class="relative transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all  sm:w-full sm:max-w-lg sm:p-6"
			>
				<div>
					<div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
						<svg
							class="h-6 w-6 text-green-600"
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
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium
								explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam
								accusamus facere veritatis.
							</p>
						</div>
					</div>
				</div>
				<div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
					<button
						type="button"
						class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
						>Deactivate</button
					>
					<UToggle>
						<button
							type="button"
							class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
							>Cancel</button
						>
					</UToggle>
				</div>
			</div>
		{/snippet}
	</UTooltip>
</section>
