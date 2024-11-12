<script lang="ts">
	/** Imports */
	import { createPagination, melt } from '@melt-ui/svelte';
	import type { PaginateProps } from './paginate.js';

	/** Props */
	let { ...props }: PaginateProps = $props();

	const {
		elements: { root, pageTrigger, prevButton, nextButton },
		states: { pages, range }
	} = createPagination({
		count: props['count'] ?? 100,
		perPage: 10,
		defaultPage: 1,
		siblingCount: 1
	});
	/** Styles */
</script>

<nav aria-label="pagination" use:melt={$root}>
	<p>
		Showing items {$range.start} - {$range.end}
	</p>
	<div>
		<span use:melt={$prevButton}>{@render props.prev?.()}</span>
		{#each $pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<span>•••</span>
			{:else}
				<button use:melt={$pageTrigger(page)}>{page.value}</button>
			{/if}
		{/each}
		<span use:melt={$nextButton}>{@render props.next?.()}</span>
	</div>
</nav>
