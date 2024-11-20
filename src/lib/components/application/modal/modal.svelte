<script lang="ts">
	/** Imports  */
	import { createDialog, melt, createSync } from '@melt-ui/svelte';
	import { flyAndScale } from '$lib/theme/transition/fly-scale.js';
	import { fade } from 'svelte/transition';
	import { useToggle } from '$lib/composables/toggle.js';
	import { modal, type ModalProps } from './modal.js';
	import { useTransition } from '$lib/composables/transition.js';
	import { cn } from '$lib/utils/merge.js';
	import { stringify } from '$lib/utian/utils.js';
	import { useUI } from '$lib/utian/index.js';

	/** props */
	let { value = $bindable(false), ...props }: ModalProps = $props();
	const {
		elements: { overlay, content, portalled, trigger, close },
		states
	} = createDialog({
		forceVisible: true,
		open: props['open']
	});

	const sync = createSync(states);
	$effect(() => {
		sync.open(value, (v) => (value = v));
	});

	const transition = useTransition();
	const toogle = useToggle();
	toogle.set(states.open, trigger, close);
	const txn = $state({
		overlay: transition.set(props['overlay-transition'], { duration: 150 }),
		content: transition.set(props.transition, { duration: 150, y: 8, start: 0.96 })
	});

	/** Styles */
	const ui = useUI(modal, props.class, props.override);
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
			class={cn(stringify(ui.content), ui.class)}
			in:flyAndScale={txn.content.in}
			out:flyAndScale={txn.content.out}
			use:melt={$content}
		>
			{@render props.content?.()}
		</div>
	</div>
{/if}
