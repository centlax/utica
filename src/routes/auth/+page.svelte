<script lang="ts">
	import { Field, Control, Label, Description, FieldErrors, Fieldset, Legend } from 'formsnap';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import type { PageData } from './$types.js';
	import { allergies, schema, themes } from './schema.js';
	import { UFormDebug, UField, UForm, UInput, ULabel, UTextarea } from '$lib/index.js';
	import { useForm } from '$lib/composables/form.js';

	export let data: PageData;

	const form = useForm(data.form, {
		validators: zodClient(schema)
	});

	const { form: state } = form;
</script>

<UForm {form} class="mx-auto flex max-w-md flex-col">
	<UField name="email" help="Company email is preferred">
		<ULabel>Email</ULabel>
		<UInput autocomplete="email" type="email" bind:value={$state.email} />
	</UField>

	<Field {form} name="bio">
		<ULabel>Bio</ULabel>
		<UTextarea bind:value={$state.bio} />
		<Description>Tell us a bit about yourself.</Description>
		<FieldErrors />
	</Field>

	<Field {form} name="language">
		<Control let:attrs>
			<Label>Language</Label>
			<select {...attrs} bind:value={$state.language}>
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
				<input {...attrs} type="radio" value={theme} bind:group={$state.theme} />
			</Control>
		{/each}
		<Description>We prefer dark mode, but the choice is yours.</Description>
		<FieldErrors />
	</Fieldset>
	<Field {form} name="marketingEmails">
		<Control let:attrs>
			<input {...attrs} type="checkbox" bind:checked={$state.marketingEmails} />
			<Label>I want to receive marketing emails</Label>
		</Control>
		<Description>Stay up to date with our latest news and offers.</Description>
		<FieldErrors />
	</Field>
	<Fieldset {form} name="allergies">
		<Legend>Food allergies</Legend>
		{#each allergies as allergy}
			<Control let:attrs>
				<input {...attrs} type="checkbox" bind:group={$state.allergies} value={allergy} />
				<Label>{allergy}</Label>
			</Control>
		{/each}
		<Description>When we provide lunch, we'll accommodate your needs.</Description>
		<FieldErrors />
	</Fieldset>
	<button>Submit</button>
</UForm>

<UFormDebug data={$state} />
