<script lang="ts">
	/** Imports */
	import { type ProviderProps } from './provider.js';
	import { ModeWatcher } from 'mode-watcher';
	import UToast from '../toast/toast.svelte';
	import { fly } from 'svelte/transition';

	/** Props */
	let { ...props }: ProviderProps = $props();

	/** Styles */
</script>

<ModeWatcher />
{#if props.toast}
	{@render props.toast()}
{:else}
	<UToast />
{/if}
<div {...props}>
	{@render props.children()}
</div>
