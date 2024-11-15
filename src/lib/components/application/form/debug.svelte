<script lang="ts">
	import SuperDebug from 'sveltekit-superforms';
	import type { FormDebugProps } from './debug.js';
	let { ...props }: FormDebugProps = $props();
</script>

<SuperDebug {...props} />
