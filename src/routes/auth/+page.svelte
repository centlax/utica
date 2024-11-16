<script lang="ts">
	import { useForm } from '$lib/composables/form.js';
	import { UForm, UField, UFormDebug, UInput, ULabel, UButton, UAlert } from '$lib/index.js';
	import { superForm, type SuperForm } from 'sveltekit-superforms';

	export let data;
	const { proxy, state, errors, message } = useForm(data.form, {
		resetForm: false,
		clearOnSubmit: 'none'
	});
</script>

<UAlert>
	<h2>Size</h2>
	{#if $message}<p>{$message}</p>{/if}
</UAlert>

<UForm schema={data.form} method="POST">
	<UField name="name">
		<ULabel>Name</ULabel>
		<UInput bind:value={$state.name} />
	</UField>

	<UField name="email">
		<ULabel>Email address</ULabel>
		<UInput bind:value={$state.email} />
	</UField>

	<UButton>Submit</UButton>
</UForm>

<UFormDebug data={proxy.form} />
