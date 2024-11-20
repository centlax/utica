<script lang="ts" generics="T">
	/** Imports */
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { accordion, type AccordionProps } from './accordion.js';
	import { useUI } from '$lib/utian/index.js';
	import { stringify as st } from '$lib/utian/utils.js';
	import { cn } from '$lib/utils/merge.js';
	import { useTransition } from '$lib/composables/transition.js';

	/** Imports */
	let { items, ...props }: AccordionProps<T> = $props();
	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		multiple: props['multiple'] ?? false,
		disabled: props['disabled'] ?? false,
		forceVisible: props['force-visible'] ?? false,
		defaultValue: props['default-value'],
		onValueChange: props['on-value-change']
	});

	/** Styles */
	const ui = useUI(accordion, props.class, props.override);
	const transition = useTransition();
	const txn = transition.set(props.transition);
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
				<div
					{...props}
					use:melt={$content(id)}
					in:slide={txn.in}
					out:slide={txn.out}
					class={cn(st(ui.content), ui.class)}
				>
					{@render props.content?.(data)}
				</div>
			{/if}
		</div>
	{/each}
</div>
