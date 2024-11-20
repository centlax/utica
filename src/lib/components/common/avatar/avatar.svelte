<script lang="ts">
	/** Imports */
	import { createAvatar, melt } from '@melt-ui/svelte';
	import { avatar, type AvatarProps } from './avatar.js';
	import { useUI } from '$lib/utian/index.js';
	import { stringify as st } from '$lib/utian/utils.js';
	import { cn } from '$lib/utils/merge.js';

	/** Props */
	let { ...props }: AvatarProps = $props();

	const {
		elements: { image, fallback }
	} = createAvatar({
		src: props['src'] ?? '',
		delayMs: props['delay-ms'],
		loadingStatus: props['loading-status']
	});

	/** Styles */
	const ui = useUI(avatar, props.class, props.override);
</script>

<span data-ui="avatar" class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
	<img use:melt={$image} alt={props.alt} class={st(ui.image)} />
	<span use:melt={$fallback} class={st(ui.fallback)}>
		{#if typeof props.fallback === 'string'}
			{props.fallback}
		{:else}
			{@render props.fallback?.()}
		{/if}
	</span>
</span>
