<script lang="ts" context="module">
	type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	import { ctxField, ctxForm } from '$lib/composables/form.js';

	import { formFieldProxy, type FormPathLeaves } from 'sveltekit-superforms';

	export let name: FormPathLeaves<T>;
	const ctx = ctxForm();
	const field = formFieldProxy(ctx.get(), name);
	const { value, errors, constraints } = field;
	const _ctxField = ctxField();
	_ctxField.set(field);
</script>

<label>
	{name}<br />

	
	<slot/>

</label>
{#if $errors}<span class="invalid">{$errors}</span>{/if}
