<script lang="ts">
	let { children } = $props();
	let triggerRef = $state<HTMLButtonElement>();

	function focusTrigger() {
		triggerRef?.focus();
	}
</script>

<div class="bg-white dark:bg-neutral-900" aria-label="Global">
	{@render children()}
</div>
