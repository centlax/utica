<script lang="ts">
	/** Imports */
	import { createDialog, melt, createSync } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';
	import { useToggle } from '$lib/composables/toggle.js';
	import { cn } from '$lib/utils/merge.js';
	import { sheet, type SheetProps } from './sheet.js';
	import { useTransition } from '$lib/composables/transition.js';
	import { stringify } from '$lib/utian/utils.js';
	import { useUI } from '$lib/utian/index.js';

	/** Props */
	let {
		value = $bindable(false),

		...props
	}: SheetProps = $props();

	const {
		elements: { overlay, content, portalled, trigger, close },
		states
	} = createDialog({
		role: props['role'] ?? 'dialog',
		preventScroll: props['prevent-scroll'] ?? true,
		escapeBehavior: props['escape-behavior'] ?? 'close',
		closeOnOutsideClick: props['close-on-outside-click'] ?? true,
		portal: props['portal'] ?? 'body',
		forceVisible: props['force-visible'] ?? false,
		openFocus: props['open-focus'],
		closeFocus: props['close-focus'],
		defaultOpen: props['default-open'] ?? false,
		open: props['open']
	});
	const sync = createSync(states);
	$effect(() => {
		sync.open(value, (v) => (value = v));
	});

	const toogle = useToggle();
	toogle.set(states.open, trigger, close);

	const transition = useTransition();
	const txn = $state({
		overlay: transition.set(props['overlay-transition'], { duration: 150 }),
		content: transition.set(props['transition'], {
			in: { x: '100%', duration: 500, opacity: 1 },
			out: { x: '100%', duration: 300, opacity: 1 }
		})
	});

	/** Styles */
	const ui = useUI(sheet, props.class, props.override);
	const css = $state({
		is: {
			dir: /right-|top-|bottom-/.test(ui.class ?? '')
		}
	});
</script>

{@render props.children?.()}

{#if value}
	<div class={stringify(ui.root)} use:melt={$portalled}>
		<div
			use:melt={$overlay}
			class={stringify(ui.overlay)}
			in:fade={txn.overlay.in}
			out:fade={txn.overlay.out}
			aria-hidden="true"
		></div>
		<div
			{...props}
			class={cn(stringify(ui.content), !css.is.dir && 'left-0', ui.class)}
			in:fly={txn.content.in}
			out:fly={txn.content.out}
			use:melt={$content}
		>
			{@render props.content?.()}
		</div>
	</div>
{/if}
