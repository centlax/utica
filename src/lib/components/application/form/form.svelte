<script lang="ts">
	import { ctxForm } from '$lib/composables/form.js';
	import { type Snippet } from 'svelte';
	import type { HTMLFormAttributes } from 'svelte/elements';
	import type { SuperForm, SuperFormData } from 'sveltekit-superforms/client';

	interface Props extends HTMLFormAttributes {
		state: SuperFormData<Record<string, unknown>>;
		children?: Snippet;
		use: any;
		proxy: SuperForm<Record<string, unknown>, any>;
	}

	let { ...props }: Props = $props();
	const ctx = ctxForm();
	ctx.set(props.proxy);
</script>

<form use:props.use {...props}>
	{@render props.children?.()}
</form>
