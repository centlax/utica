<script lang="ts">
	/** Imports */
	import { UHeaderAside, UHeaderItem, USheet, UToggle } from '$lib/index.js';
	import { type HeaderProps } from './header.js';

	/** Props */
	let { ...props }: HeaderProps = $props();
	/** Styles */
</script>

<header {...props} class="w-full bg-white">
	<USheet
		class="fixed inset-y-0 right-0  w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
	>
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				{@render props.logo?.()}
			</div>
			<div class="flex lg:hidden">
				<UToggle>
					<button
						type="button"
						class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="h-6 w-6"
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
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</UToggle>
			</div>

			<div class="hidden lg:flex lg:gap-x-12">
				<UHeaderItem />
			</div>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<a href="/" class="text-sm/6 font-semibold text-gray-900"
					>Log in <span aria-hidden="true">&rarr;</span></a
				>
			</div>
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		{#snippet content()}
		
			<div class="flex items-center justify-between">
				{@render props.logo?.()}

				<UToggle>
					<button type="button" class="-m-2.5 rounded-full bg-gray-200 p-2 text-gray-500">
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					</button>
				</UToggle>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/10">
					<UHeaderAside />
					<div class="py-6">
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
							>Log in</a
						>
					</div>
				</div>
			</div>
		{/snippet}
	</USheet>
</header>
