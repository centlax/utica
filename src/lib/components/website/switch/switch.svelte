<script lang="ts">
	/** Imports */
	import { createSwitch, createSync, melt } from '@melt-ui/svelte';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	type Props = {
		value?: boolean;
	};
	let { value = $bindable(false), ...props }: Props = $props();

	const {
		elements: { root, input },
		states
	} = createSwitch();
	const sync = createSync(states);
	$effect(() => {
		sync.checked(value, (v) => (value = v));
	});

	let bits: boolean[] = [false, true];
	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});
</script>

<button
	class="grid w-fit cursor-default grid-cols-2 gap-1 overflow-hidden rounded-full bg-primary-900 p-0.5"
	data-ui="switch"
	{...props}
	use:melt={$root}
>
	{#each bits as bit}
		<span class="relative col-span-1 size-6">
			{#if bit === value}
				<span
					class="absolute inset-0 rounded-full bg-primary-500 transition-colors"
					in:send={{ key: 'checked' }}
					out:receive={{ key: 'checked' }}
				>
				</span>
			{/if}
		</span>
	{/each}
	<input use:melt={$input} />
</button>
