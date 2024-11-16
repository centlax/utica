<script lang="ts">
	import type { InputProps } from './input.js';
	import { ctxField } from '$lib/composables/form.js';
	let { value = $bindable(), ...props }: InputProps = $props();

	const ctx = ctxField();
	const {value: _v, errors, constraints } = ctx.get();
</script>

<input
	aria-invalid={$errors ? 'true' : undefined}
	bind:value={$_v}
	{...$constraints}
	{...props}
/>
