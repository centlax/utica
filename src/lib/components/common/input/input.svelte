<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import type { InputProps } from './input.js';
	import type { ControlAttrs } from 'formsnap';
	let { value = $bindable(), ...props }: InputProps = $props();

	let input: any = getContext('input');
	let attrs: ControlAttrs = getContext('attrs');
</script>

{#if $input}
	<input {...attrs} bind:value {...props} use:melt={$input} />
{:else}
	<input {...attrs} bind:value {...props} />
{/if}
