<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import { type DashAsideProps, type Item, dashAside } from './aside.js';
	import { stringify as st } from '$lib/utian/utils.js';
	import { useUI } from '$lib/utian/index.js';
	import { cn } from '$lib/utils/merge.js';

	/** Props */
	let { items, ...props }: DashAsideProps<T> = $props();

	/** styles */
	const ui = useUI(dashAside, props.class, props.override);
	let css = $state({
		aside: cn(st(ui.root), ui.class)
	});
</script>

{#snippet list(link: T)}
	<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
	<li>
		<a
			href="/"
			class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-sm/6 font-semibold text-indigo-600"
		>
			{@render props.trigger?.(link)}
		</a>
	</li>
{/snippet}

<aside {...props} class={css.aside}>
	{@render props.north?.()}
	<nav class="flex flex-1 flex-col justify-between" aria-label="Sidebar">
		{#each items as item}
			<ul role="list" class="flex flex-1 flex-col gap-y-7">
				<h3>item</h3>
				<ul role="list" class="-mx-2 space-y-1">
					<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
					{#if item.items}
						{#each item.items as _item}
							<li>
								<a
									href="/"
									class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-sm/6 font-semibold text-indigo-600"
								>
									list
									{#if _item.items}
										{#each _item.items as __items}
											sfkl
										{/each}
									{/if}
								</a>
							</li>
						{/each}
					{/if}
				</ul>
			</ul>
		{/each}
	</nav>
	{@render props.south?.()}
</aside>
