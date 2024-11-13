<script lang="ts">
	import { UDashLayout } from '$lib/index.js';
	let { ...props } = $props();
</script>

<UDashLayout>
	{@render props.children()}
</UDashLayout>
