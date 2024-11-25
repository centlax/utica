<script lang="ts">
	let { children } = $props();
	import { Accordion } from 'bits-ui';
</script>

<Accordion.Root type="multiple">
	{@render children()}
</Accordion.Root>
