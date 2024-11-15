<script lang="ts" module>
	import type { FormPath } from 'sveltekit-superforms';
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends FormPath<T>">
	import { Field, Control, Label, Description, FieldErrors, Fieldset, Legend } from 'formsnap';
	import type { SuperForm } from 'sveltekit-superforms';
	import { getContext, setContext, type Snippet } from 'svelte';

	type Props = {
		name?: U;
		children: Snippet;
	};
	let { ...props }: Props = $props();
	let schema: SuperForm<Record<string, unknown>> = getContext('schema');
</script>

<Field name={props.name || ''} form={schema}>
	<Control let:attrs>
		{@const _ = setContext('attrs', attrs)}
		{@render props.children?.()}
	</Control>
</Field>
