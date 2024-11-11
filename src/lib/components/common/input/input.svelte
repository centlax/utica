<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	const meltContext: any = getContext('melt');
	let { ...props } = $props();
</script>

<input
	use:melt={$meltContext()}
	class="size-12 rounded-md bg-white text-center text-lg text-sky-900 shadow-sm"
	{...props}
/>
