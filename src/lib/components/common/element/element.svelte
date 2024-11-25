<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { ElementProps } from './element.js';
	import { ctxElement } from './index.js';
	let { as, children, ...props }: ElementProps = $props();

	const ctx = ctxElement();
	const { attrs, action, state, transition } = ctx.get(as);
</script>

<svelte:element this={props.this} {...props} {...attrs} use:action>
	{@render children?.()}
</svelte:element>
