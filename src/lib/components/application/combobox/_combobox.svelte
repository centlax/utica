<script lang="ts" module>
	type Manga = {
		author: string;
		title: string;
		disabled: boolean;
	};
</script>

<script lang="ts" generics="T extends Manga">
	import { ctxInput } from '$lib/composables/input.js';

	import { createCombobox, melt, type ComboboxOptionProps } from '@melt-ui/svelte';
	import { fly } from 'svelte/transition';
	import type { ComboboxProps } from './combobox.js';

	let { ...props }: ComboboxProps = $props();
	let mangas: Manga[] = [];

	const toOption = (manga: Manga): ComboboxOptionProps<Manga> => ({
		value: manga,
		label: manga.title,
		disabled: manga.disabled
	});

	const {
		elements: { menu, input, option, label },
		states: { open, inputValue, touchedInput, selected },
		helpers: { isSelected }
	} = createCombobox<Manga>({
		forceVisible: true
	});

	$effect(() => {
		if (!$open) $inputValue = $selected?.label ?? '';
	});

	const ctx = ctxInput();
	ctx.set($input);
</script>

{@render props.children?.()}

{#if $open}
	<ul
		class=" z-10 flex max-h-[300px] flex-col overflow-hidden rounded-lg"
		use:melt={$menu}
		transition:fly={{ duration: 150, y: -5 }}
	>
		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<div
			class="flex max-h-full flex-col gap-0 overflow-y-auto bg-white px-2 py-2 text-black"
			tabindex="0"
		>
			{#each mangas as manga, index (index)}
				<li use:melt={$option(toOption(manga))}>
					{#if $isSelected(manga)}
						<div class="check absolute left-2 top-1/2 z-10 text-primary-900">v</div>
					{/if}
				</li>
			{:else}
				<li class="relative cursor-pointer rounded-md py-1 pl-8 pr-4">No results found</li>
			{/each}
		</div>
	</ul>
{/if}
