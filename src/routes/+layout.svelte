<script lang="ts">
	import '../app.css';
	import { UProvide } from '$lib/index.js';
	let { children } = $props();
</script>

<UProvide>
	{@render children()}
</UProvide>
