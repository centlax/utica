<script lang="ts">
	/** Imports */
	import { type AvatarGroupProps } from './group.js';
	/** Props */
	let { ...props }: AvatarGroupProps = $props();
	/** Styles */
</script>

<div data-ui="avatar-group" class="isolate flex overflow-hidden" {...props}>
	{@render props.children?.()}
</div>
