<script lang="ts">
	/** Imports */
	import { setContext } from 'svelte';
	import { type AvatarGroupProps } from './group.js';

	/** Props */
	let { ...props }: AvatarGroupProps = $props();
	/** Styles */

	let avatars = $state({ count: 0 });
	setContext('counter', avatars);
	setContext('max', props.max);
</script>

<div data-ui="avatar-group" class="isolate flex -space-x-1 overflow-hidden" {...props}>
	{@render props.children?.()}
</div>
