<script lang="ts" module>
	type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	import { getContext, setContext, type Snippet } from 'svelte';
	import { formFieldProxy } from 'sveltekit-superforms';
	import type { SuperForm, FormPathLeaves } from 'sveltekit-superforms';

	interface Props {
		name: FormPathLeaves<T>;
		children: Snippet
	}

	let { ...props }: Props = $props();

	let superform: SuperForm<T> = getContext('superform');
	const { value, errors, constraints } = formFieldProxy(superform, props.name as FormPathLeaves<T>);
	setContext('for', props.name);
</script>

{@render props.children?.()}
<div {...props} class="control">
	<input
		name={props.name}
		type="text"
		bind:value={$value}
		{...$constraints}
		required={false}
	/>
</div>
{#if $errors}
	<p class="help is-danger">{$errors}</p>
{/if}
