<script lang="ts">
	import { ctxField } from '$lib/composables/form.js';
	/** Imports */
	import type { TextareaProps } from './textarea.js';

	/** Props */
	let { value = $bindable(), ...props }: TextareaProps = $props();

	const field = ctxField();
	const has = field.has();

	const { proxy } = field.get();

	let attrs = $state({
		...props,
		...(has.proxy ? proxy.constraints : {})
	});

	/** Styles  */
</script>

<textarea {...attrs} bind:value> </textarea>
