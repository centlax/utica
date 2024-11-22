<script lang="ts">
	import { cn } from '$lib/utils/merge.js';

	let { ...props } = $props();
</script>

<span
	{...props}
	class={cn('i-fluent-target-arrow-16-filled size-10 rotate-45 text-sky-500', props.class)}
></span>
