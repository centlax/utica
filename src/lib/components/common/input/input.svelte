<script lang="ts">
	import type { InputProps } from './input.js';
	let { value = $bindable(), ...props }: InputProps = $props();
</script>

<input bind:value {...props} />
