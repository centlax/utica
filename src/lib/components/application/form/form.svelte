<script lang="ts" module>
	type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	import { setContext, type Snippet } from 'svelte';
	import type { HTMLFormAttributes } from 'svelte/elements';

	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import type { SuperValidated } from 'sveltekit-superforms';

	interface Props extends HTMLFormAttributes {
		data: SuperValidated<T>;
		dataType?: 'form' | 'json';
		'invalidate-all'?: boolean;
		children?: Snippet;
	}

	let { ...props }: Props = $props();

	export const superform = superForm(props.data, {
		dataType: props.dataType,
		invalidateAll: props['invalidate-all'],
		onUpdated({ form }) {
			if (form.valid) {
				// Successful post! Do some more client-side stuff.
			}
		}
	});

	const { form, message, delayed, errors, allErrors, enhance } = superform;
	setContext('superform', superform);
</script>

<form method="POST" use:enhance {...props}>
	{#if $message}
		<div
			class="status"
			class:error={$message.status >= 400}
			class:success={!$message.status || $message.status < 300}
		>
			{$message.text}
		</div>
	{/if}
	{@render props.children?.()}
</form>

<SuperDebug data={$form}></SuperDebug>

<style>
	.status {
		color: white;
		padding: 6px;
		padding-left: 8px;
		border-radius: 2px;
		font-weight: 500;
		margin-block: 0.75em;
	}

	.status.success {
		background-color: seagreen;
	}

	.status.error {
		background-color: #ff2a02;
	}
</style>
