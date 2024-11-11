<script lang="ts">
	import { createPagination, melt } from '@melt-ui/svelte';
	import type { PaginateProps } from './paginate.js';

	let { ...props }: PaginateProps = $props();

	const {
		elements: { root, pageTrigger, prevButton, nextButton },
		states: { pages, range }
	} = createPagination({
		count: 100,
		perPage: 10,
		defaultPage: 1,
		siblingCount: 1
	});
</script>

<nav aria-label="pagination" use:melt={$root}>
	<p>
		Showing items {$range.start} - {$range.end}
	</p>
	<div class="flex items-center gap-2">
		<span use:melt={$prevButton}>
			{@render props.prev?.()}
		</span>
		{#each $pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				{#if props.ellipsis}
					{@render props.ellipsis()}
				{:else}
					<span>•••</span>
				{/if}
			{:else}
				<button use:melt={$pageTrigger(page)}>{page.value}</button>
			{/if}
		{/each}
		<span use:melt={$nextButton}>
			{@render props.next?.()}
		</span>
	</div>
</nav>
