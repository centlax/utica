<script lang="ts">
	import { ctxForm, ctxField } from '$lib/composables/form.js';
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { FieldProps } from './field.js';

	// Extract props with default value for name
	let { name, ...props }: FieldProps = $props();

	// Retrieve form context
	const _form = ctxForm();
	const form = _form.get();

	// Set field in context
	const proxy = formFieldProxy(form, name);
	const field = ctxField();
	field.set(proxy, name);

	const { errors } = proxy;
</script>

<div {...props}>
	{@render props.children?.()}
	{#if props.error || $errors}
		<p class="error">
			{#if typeof props.error === 'string' || $errors}
				{props.error || $errors}
			{:else}
				{@render props.error?.()}
			{/if}
		</p>
	{:else}
		<p class="help">
			{#if typeof props.help === 'string'}
				{props.help}
			{:else}
				{@render props.help?.()}
			{/if}
		</p>
	{/if}
</div>
