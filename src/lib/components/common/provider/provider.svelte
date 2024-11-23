<script lang="ts">
	/** Imports */
	import { type ProviderProps } from './provider.js';
	import { ModeWatcher } from 'mode-watcher';
	import UToast from '../toast/toast.svelte';
	import Color from './_app.svelte';

	/** Props */
	let { ...props }: ProviderProps = $props();

	/** Styles */
</script>

<ModeWatcher />
<Color />
{#if props.toast}
	{@render props.toast()}
{:else}
	<UToast />
{/if}
<div {...props}>
	{@render props.children()}
</div>
