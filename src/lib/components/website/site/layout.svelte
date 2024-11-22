<script lang="ts">
	let { children } = $props();
</script>

<div class="bg-white dark:bg-neutral-900" aria-label="Global">
	{@render children()}
</div>

<style>
	:global(body, html){
		@apply h-full
	}
</style>
