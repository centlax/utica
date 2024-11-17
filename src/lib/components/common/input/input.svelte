<script lang="ts">
	import { ctxField } from '$lib/composables/form.js';
	import type { InputProps } from './input.js';
	let { value = $bindable(), ...props }: InputProps = $props();

	const field = ctxField();
	const has = field.has();

	const { proxy } = field.get();

	let attrs = $state({
		...props,
		...(has.proxy ? proxy.constraints : {})
	});
</script>

<input {...attrs} bind:value />
