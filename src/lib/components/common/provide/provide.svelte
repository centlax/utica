<script lang="ts">
	/** Imports */
	import { type ProvideProps } from './provide.js';
	import { ModeWatcher } from 'mode-watcher';
	import UToast from '../toast/toast.svelte';
	import { fly } from 'svelte/transition';

	/** Props */
	let { ...props }: ProvideProps = $props();

	/** Styles */
</script>

<ModeWatcher />
{#if props.toast}
	{@render props.toast()}
{:else}
	<UToast
		transition={{
			in: { func: fly, options: { duration: 5000, x: '100%' } },
			out: { func: fly, options: { duration: 5000, x: '100%' } }
		}}
	/>
{/if}
<div {...props}>
	{@render props.children()}
</div>
