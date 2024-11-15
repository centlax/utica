<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import {
		Field,
		Control,
		Label,
		Description,
		FieldErrors,
		Fieldset,
		Legend,
		type ControlAttrs
	} from 'formsnap';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import type { PageData } from './$types.js';
	import { allergies, schema, themes } from './schema.js';
	import { UFormDebug, UForm, UFormField, UInput } from '$lib/index.js';
	import { getContext } from 'svelte';

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(schema)
	});
	const { form: formData, enhance } = form;
</script>

<UForm schema={form} use={enhance} class="mx-auto flex max-w-md flex-col" method="POST">
	<UFormField name="email">
		<Label>Email</Label>
		{@const attrs: ControlAttrs = getContext('attrs')}
		<UInput type="email" bind:value={$formData.email} />
		<Description>Company email is preferred</Description>
		<FieldErrors />
	</UFormField>
	<Field {form} name="bio">
		<Control let:attrs>
			<Label>Bio</Label>
			<textarea {...attrs} bind:value={$formData.bio}></textarea>
		</Control>
		<Description>Tell us a bit about yourself.</Description>
		<FieldErrors />
	</Field>
	<Field {form} name="language">
		<Control let:attrs>
			<Label>Language</Label>
			<select {...attrs} bind:value={$formData.language}>
				<option value="fr">French</option>
				<option value="es">Spanish</option>
				<option value="en">English</option>
			</select>
		</Control>
		<Description>Help us address you properly.</Description>
		<FieldErrors />
	</Field>
	<Fieldset {form} name="theme">
		<Legend>Select your theme</Legend>
		{#each themes as theme}
			<Control let:attrs>
				<Label>{theme}</Label>
				<input {...attrs} type="radio" value={theme} bind:group={$formData.theme} />
			</Control>
		{/each}
		<Description>We prefer dark mode, but the choice is yours.</Description>
		<FieldErrors />
	</Fieldset>
	<Field {form} name="marketingEmails">
		<Control let:attrs>
			<input {...attrs} type="checkbox" bind:checked={$formData.marketingEmails} />
			<Label>I want to receive marketing emails</Label>
		</Control>
		<Description>Stay up to date with our latest news and offers.</Description>
		<FieldErrors />
	</Field>
	<Fieldset {form} name="allergies">
		<Legend>Food allergies</Legend>
		{#each allergies as allergy}
			<Control let:attrs>
				<input {...attrs} type="checkbox" bind:group={$formData.allergies} value={allergy} />
				<Label>{allergy}</Label>
			</Control>
		{/each}
		<Description>When we provide lunch, we'll accommodate your needs.</Description>
		<FieldErrors />
	</Fieldset>
	<button>Submit</button>
</UForm>
<UFormDebug data={$formData} />
