<script lang="ts">
	/** Imports */
	import { ctxField } from '$lib/composables/form.js';
	import { ctxInput } from '$lib/composables/input.js';
	import { useUI } from '$lib/composables/ui.js';
	import { stringify } from '$lib/utils/utils.js';
	import { cn } from '$lib/utils/merge.js';
	import { melt } from '@melt-ui/svelte';
	import { input, type InputProps } from './input.js';

	/** Props */
	let { value = $bindable(), ...props }: InputProps = $props();

	const field = ctxField();
	const has = field.has();
	const { proxy } = field.get();

	const ctx = ctxInput();
	const _melt: any = ctx.get();

	let attrs = $state({
		...props,
		...(has.proxy ? proxy.constraints : {})
	});

	/** Styles */
	const ui = useUI(input, props.class, props.override);
	let css = $state({
		input: cn(stringify(ui.root), ui.class)
	});

	/** Melt Context */
</script>

{#if ctx.has()}
	<input {...attrs} bind:value class={css.input} use:melt={_melt} />
{:else}
	<input {...attrs} bind:value class={css.input} />
{/if}
