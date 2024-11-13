<script lang="ts">
	/** Imports */
	import { createAvatar, melt } from '@melt-ui/svelte';
	import type { AvatarProps } from './avatar.js';
	import { fade } from 'svelte/transition';

	/** Props */
	let { ...props }: AvatarProps = $props();

	const {
		elements: { image, fallback },
		states: { loadingStatus }
	} = createAvatar({
		src: props['src'] ?? '',
		delayMs: props['delay-ms'],
		loadingStatus: props['loading-status']
	});
	/** Styles */
</script>

<span
	data-ui="avatar"
	{...props}
	class="flex  size-10 items-center justify-center rounded-full bg-neutral-100 ring-2 ring-white"
>
	{#if $loadingStatus === 'loaded'}
		<img
			use:melt={$image}
			data-melt-avatar-image
			transition:fade
			alt={props.alt}
			class="size-full select-none rounded-[inherit]"
		/>
	{/if}
	<span use:melt={$fallback} class="text-3xl font-medium text-sky-700">
		{#if props['text']}
			{props.text}
		{:else}
			{@render props.children?.()}
		{/if}
	</span>
</span>
