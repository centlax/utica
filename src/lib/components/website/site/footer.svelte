<script lang="ts" generics="T extends Item<T>">
	import { type Item } from '$lib/types/item.js';
	import { useUI } from '$lib/utian/index.js';
	import { stringify as st } from '$lib/utian/utils.js';
	import { cn } from '$lib/utils/merge.js';
	import { siteFooter, type SiteFootProps } from './footer.js';

	let { items, ...props }: SiteFootProps<T> = $props();

	/** Styles */
	const ui = useUI(siteFooter, props.class, props.override);

	const is = $state({
		slot: {
			east: props.east,
			center: props.children,
			west: props.west
		}
	});
</script>

<!-- <footer class={cn(st(ui.root), ui.class)}>
	<div class={st(ui.north)}>
		{@render props.north?.()}
	</div>
		<div class={st(ui.west)}>
			{@render props.west?.()}
		</div>
		<div class={st(ui.center)}>
			{#each items as item}
				<div class="flex">
					<div>
						<h3 class="text-sm/6 font-semibold text-white">{item.title}</h3>

						{#if item.items}
							<ul role="list" class="mt-6 space-y-4">
								{#each item.items as _item}
									{@render props.trigger?.(_item)}
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			{/each}
		</div>
		<div class={st(ui.east)}>
			{@render props.east?.()}
		</div>
	
	<div class={st(ui.south)}>
		{@render props.south?.()}
	</div>
</footer> -->

<footer class="relative mt-10 overflow-auto rounded-xl bg-neutral-900 p-8">
	<div
		class="grid grid-flow-row grid-cols-3 gap-4  text-white"
	>
		{#if props.north}
			<div
				class="col-span-3 row-span-1 grid place-content-center rounded-lg bg-fuchsia-500 p-4 shadow-lg"
			>
				{@render props.north()}
			</div>
		{/if}

		<!-- 02 01 -->
		{#if props.west}
			<div
				class="col-span-1 row-span-1 grid place-content-center rounded-lg bg-fuchsia-300 p-4 dark:bg-fuchsia-800 dark:text-fuchsia-400"
			>
				02 01
			</div>
		{/if}

		<!-- 02 02 -->
		{#if props.children || props.trigger || props.content}
			<div
				class="col-span-2 row-span-1 grid grid-cols-4 gap-8  p-4   "
			>
			{#each items as item}
			<div class="mb-10">
			
					<h3 class="text-sm/6 font-semibold text-white">{item.title}</h3>

					{#if item.items}
						<ul role="list" class="mt-6 space-y-4">
							{#each item.items as _item}
								{@render props.trigger?.(_item)}
							{/each}
						</ul>
					{/if}
				
			</div>
		{/each}
			</div>
		{/if}

		{#if props.east}
			<div
				class="col-span-1 row-span-1 grid place-content-center rounded-lg bg-fuchsia-300 p-4 dark:bg-fuchsia-800 dark:text-fuchsia-400"
			>
				02 03
			</div>
		{/if}

		{#if props.south}
			<div class="col-span-3 row-span-1 grid ">
				{@render props.south()}
			</div>
		{/if}
	</div>
</footer>
