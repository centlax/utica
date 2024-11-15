<script lang="ts">
	import { UAccordion, UAccordionItem } from '$lib/index.js';
</script>

<div class="space-y-2 py-6">
	<div class="-mx-3">
		<button
			type="button"
			class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
			aria-controls="disclosure-1"
			aria-expanded="false"
		>
			Product
			<svg
				class="h-5 w-5 flex-none"
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

		<!-- 'Product' sub-menu, show/hide based on menu state. -->
		<div class="mt-2 space-y-2" id="disclosure-1">
			<a
				href="/"
				class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
				>Analytics</a
			>
			<a
				href="/"
				class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
				>Engagement</a
			>
			<a
				href="/"
				class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
				>Security</a
			>
			<a
				href="/"
				class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
				>Integrations</a
			>
			<a
				href="/"
				class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
				>Automations</a
			>
			<a
				href="/"
				class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
				>Watch demo</a
			>
			<a
				href="/"
				class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
				>Contact sales</a
			>
		</div>
	</div>
	<a
		href="/"
		class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
		>Features</a
	>
	<a
		href="/"
		class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
		>Marketplace</a
	>
	<a
		href="/"
		class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
		>Company</a
	>
</div>
