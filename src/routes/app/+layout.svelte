<script lang="ts">
	import { UDashLayout, USidebar } from '$lib/index.js';
	let { children } = $props();
</script>

<UDashLayout>
	<USidebar></USidebar>
	{@render children?.()}
</UDashLayout>
