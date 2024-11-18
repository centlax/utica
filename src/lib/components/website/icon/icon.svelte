<script lang="ts">
	/** Imports */
	import type { IconProps } from './icon.js';
	import { cn } from '$lib/utils/merge.js';

	/** Props */
	let { name, ...props }: IconProps = $props();
</script>

<span data-ui="icon" {...props} class={cn(name, props.class)}></span>
