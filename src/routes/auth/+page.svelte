<script lang="ts">
	import { useForm } from '$lib/composables/form.js';
	import { UForm, UField, ULabel, UFormDebug, UInput } from '$lib/index.js';
	import { fieldProxy, formFieldProxy, superForm } from 'sveltekit-superforms';
	export let data;

	const { proxy, state, errors, enhance, message } = useForm(data.form, {
		resetForm: false,
		clearOnSubmit: 'none'
	});
</script>

<UForm {state} {proxy} method="POST" use={enhance}>
	<h2>Size</h2>

	<UField name="name">
		<UInput/>
	</UField>

	<UField name="email">
		<input bind:value={$state.email} name="scoops" />
	</UField>

	{#if $message}<p>{$message}</p>{/if}
	<button>Submit</button>
</UForm>

<p class="info">
	<a href="https://svelte.dev/tutorial/group-inputs" target="_blank"
		>Original code from Svelte documentation</a
	>
</p>

<UFormDebug data={$state} />

<style>
	.info {
		border-top: 1px solid gray;
		margin-top: 4rem;
	}
</style>
