<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import { createSelect, melt } from '@melt-ui/svelte';
	import { selectMenu, type Item, type SelectMenuProps } from './menu.js';
	import { fly } from 'svelte/transition';
	import { UIcon } from '$lib/index.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { useTransition } from '$lib/composables/transition.js';

	/** Props */
	let { items, ...props }: SelectMenuProps<T> = $props();
	const {
		elements: { trigger, menu, option, group },
		states: { open, selected },
		helpers: { isSelected }
	} = createSelect<T>({
		defaultSelected: props['default-selected'],
		selected: props['selected'],
		onSelectedChange: props['on-selected-change'],
		required: props['required'] ?? false,
		disabled: props['disabled'] ?? false,
		preventScroll: props['prevent-scroll'] ?? true,
		loop: props['loop'] ?? false,
		escapeBehavior: props['escape-behavior'] ?? 'close',
		closeOnOutsideClick: props['close-on-outside-click'] ?? true,
		preventTextSelectionOverflow: props['prevent-text-selection-overflow'] ?? true,
		portal: props['portal'] ?? 'body',
		forceVisible: props['force-visible'] ?? false,
		positioning: props['float'] ?? { placement: 'bottom', fitViewport: true, sameWidth: true },
		name: props['name'],
		highlightOnHover: props['highlight-on-hover'] ?? true,
		multiple: props['multiple'] ?? false,
		defaultOpen: props['default-open'] ?? false,
		open: props['open'],
		onOpenChange: props['on-open-change']
	});

	/** styles */
	const ui = useUI(selectMenu, props.class, props.override);
	const transition = useTransition();
	let txn = $state(
		transition.set(props.transition, {
			out: { duration: 100 }
		})
	);
</script>

<button
	use:melt={$trigger}
	class="relative w-[20rem] cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 sm:text-sm/6"
>
	{#if items}
		{@render props.trigger?.($selected?.value || items[0])}
	{/if}

	<span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
		<UIcon name="i-fluent-chevron-up-down-20-filled" class="size-5 text-gray-400" />
	</span>
</button>
{#if $open}
	<div class={cn(st(ui.root), ui.class)} use:melt={$menu} in:fly={txn.in} out:fly={txn.out}>
		{#each items as item, i}
			<div use:melt={$group(`${i}`)}>
				{@render props.title?.(item)}
				{#if item.items}
					{#each item.items as _item}
						<div class={st(ui.option)} use:melt={$option({ value: _item })}>
							{@render props.option?.({ ..._item, selected: $isSelected(_item) })}
						</div>
					{/each}
				{/if}
			</div>
		{/each}
	</div>
{/if}
