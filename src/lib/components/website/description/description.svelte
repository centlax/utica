<script lang="ts">
	let { children, ...props } = $props();
</script>

<p {...props}>{@render children?.()}</p>
