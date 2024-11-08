<script lang="ts">
	/** Imports */
	import { type ProvideProps } from './provide.js';
	import { ModeWatcher } from 'mode-watcher';
	/** Props */
	let { ...props }: ProvideProps = $props();

	/** Styles */
</script>

<ModeWatcher />
<div {...props}>
	{@render props.children()}
</div>
