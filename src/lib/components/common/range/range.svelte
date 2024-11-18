<script lang="ts">
	import { createSlider, createSync, melt } from '@melt-ui/svelte';
	import type { RangeProps } from './range.js';

	let { value = $bindable(), ...props }: RangeProps = $props();

	const {
		elements: { root, range, thumbs },
		states
	} = createSlider({
		min: props['min'],
		max: props['max'],
		step: props['step'],
		orientation: props['orientation'],
		autoSort: props['auto-sort'],
		dir: props['dir'],
		disabled: props['disabled'],
		defaultValue: props['default-value']
	});
	const sync = createSync(states);
	$effect(() => {
		// @ts-ignore
		sync.value(value, (v) => (value = v));
	});
</script>

<span use:melt={$root} class="relative flex h-[20px] w-[200px] items-center">
	<span class="h-[3px] w-full bg-black/40">
		<span use:melt={$range} class="h-[3px] bg-white"></span>
	</span>

	<span
		use:melt={$thumbs[0]}
		class="h-5 w-5 rounded-full bg-white focus:ring-4 focus:!ring-black/40"
	></span>
</span>
