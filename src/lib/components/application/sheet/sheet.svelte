<script lang="ts">
	import { createDialog, melt, createSync } from '@melt-ui/svelte';
	import { fade, fly, type FlyParams } from 'svelte/transition';
	import { useToggle } from '$lib/composables/toggle.js';
	import { cn } from '$lib/utils/merge.js';
	import { sheet, type SheetProps } from './sheet.js';
	import { useTransition } from '$lib/composables/transition.js';
	import { stringify } from '$lib/utian/utils.js';
	import { useUI } from '$lib/utian/index.js';

	let {
		value = $bindable(false),

		...props
	}: SheetProps = $props();

	const {
		elements: { overlay, content, portalled, trigger, close },
		states
	} = createDialog({
		role: props['role'],
		preventScroll: props['prevent-scroll'],
		escapeBehavior: props['escape-behavior'],
		closeOnOutsideClick: props['close-on-outside-click'],
		portal: props['portal'],
		forceVisible: props['force-visible'],
		openFocus: props['open-focus'],
		closeFocus: props['close-focus'],
		defaultOpen: props['default-open'],
		open: props['open']
	});
	const sync = createSync(states);
	$effect(() => {
		sync.open(value, (v) => (value = v));
	});

	const txn = $state({
		overlay: useTransition(props['overlay-transition'], {
			duration: 150
		}),
		content: useTransition(props['transition'], {
			in: {
				x: '100%',
				duration: 500,
				opacity: 1
			},
			out: {
				x: '100%',
				duration: 500,
				opacity: 1
			}
		})
	});
	const ui = useUI(sheet, props.class, props.override);

	const toogle = useToggle();
	toogle.set(states.open, trigger, close);
	let containsDir: boolean = /right-|top-|bottom-/.test(ui.class ?? '');
</script>

{@render props.children?.()}
{#if value}
	<div class={stringify(ui.root)} use:melt={$portalled}>
		<div
			use:melt={$overlay}
			class={stringify(ui.overlay)}
			in:fade={txn.overlay.in}
			out:fade={txn.overlay.out}
		></div>
		<div
			{...props}
			class={cn(stringify(ui.content), !containsDir && 'left-0', ui.class)}
			in:fly={txn.content.in}
			out:fly={txn.content.out}
			use:melt={$content}
		>
			{@render props.content?.()}
		</div>
	</div>
{/if}
