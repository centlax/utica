<script lang="ts">
	/** Imports */
	import type { IconProps } from './icon.js';

	/** Props */
	let { ...props }: IconProps = $props();
	/** Styles */
</script>

<span {...props} data-ui="icon"></span>
