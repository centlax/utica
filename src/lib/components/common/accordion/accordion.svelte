<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import type { AccordionProps } from './accordion.js';
	import { setContext } from 'svelte';

	let { ...props }: AccordionProps = $props();

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		multiple: props['multiple'],
		disabled: props['disabled'],
		forceVisible: props['force-visible'],
		defaultValue: props['default-value'] ?? 'item-1',
		value: props['value']
	});

	setContext('item', item);
	setContext('trigger', trigger);
	setContext('content', content);
	setContext('selected', isSelected);
</script>

<div data-ui="accordion" {...props} use:melt={$root}>
	{@render props.children?.()}
</div>
