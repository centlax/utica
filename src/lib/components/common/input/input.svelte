<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	let { ...props } = $props();

	const input: any = getContext('input');
</script>

<input
	use:melt={$input}
	class="size-12 rounded-md bg-white text-center text-lg text-sky-900 shadow-sm"
	{...props}
/>
