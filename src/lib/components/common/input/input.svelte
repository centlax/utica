<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import type { InputProps } from './input.js';

	let { value = $bindable(), ...props }: InputProps = $props();

	let input: any = getContext('input');
</script>

<input bind:value {...props} use:melt={$input} />
