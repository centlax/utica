<script lang="ts">
	import { createCheckbox, melt } from '@melt-ui/svelte';

	const {
		elements: { root, input },
		helpers: { isChecked, isIndeterminate }
	} = createCheckbox({
		defaultChecked: 'indeterminate'
	});
</script>

<button
	use:melt={$root}
	class="flex size-7 appearance-none items-center justify-center
              rounded-lg bg-white text-sky-600 shadow hover:opacity-75"
	id="checkbox"
>
	{#if $isIndeterminate}
		<span class="size-5">-</span>
	{:else if $isChecked}
		<span class="size-5">V</span>
	{/if}
	<input use:melt={$input} />
</button>
