<script lang="ts" generics="T extends Item<T>">
	/** Imports */
	import type { Item } from '$lib/types/item.js';
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { accordion, type AccordionProps } from './accordion.js';
	import { useUI } from '$lib/composables/ui.js';
	import { st, cn } from '$lib/utils/wind.js';
	import { useTransition } from '$lib/composables/transition.js';

	/** Imports */
	let { as = 'div', items, ...props }: AccordionProps<T> = $props();
	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		multiple: props['multiple'] ?? false,
		disabled: props['disabled'] ?? false,
		forceVisible: props['force-visible'] ?? false,
		defaultValue: props['default-value'] ?? `${0}`,
		onValueChange: props['on-value-change']
	});

	/** Styles */
	const ui = useUI(accordion, props.class, props.override);
	const transition = useTransition();
	const txn = $state(
		transition.set(props.transition, {
			duration: 200
		})
	);
</script>

<div data-ui="accordion" use:melt={$root} class={st(ui.root)}>
	{@render props.children?.()}
	{#each items as data, index}
		<!-- Unique ID for each accordion item -->
		{@const id = `${index}`}
		<div use:melt={$item(id)} class={st(ui.item)}>
			<button use:melt={$trigger(id)} class={st(ui.trigger)}>
				{@render props.trigger?.(data)}
			</button>

			{#if $isSelected(id)}
				<svelte:element
					this={as}
					{...props}
					use:melt={$content(id)}
					in:slide={txn.in}
					out:slide={txn.out}
					class={cn(st(ui.content), ui.class)}
				>
					{@render props.content?.(data)}
				</svelte:element>
			{/if}
		</div>
	{/each}
</div>
