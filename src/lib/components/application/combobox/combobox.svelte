<script lang="ts" module>
	import type { Link } from '$lib/types/link.js';
</script>

<script lang="ts" generics="T extends Link">
	import { createCombobox, melt, type ComboboxOptionProps } from '@melt-ui/svelte';
	import { fly } from 'svelte/transition';
	import type { ComboboxProps } from './combobox.js';

	let { ...props }: ComboboxProps = $props();

	let mangas: T[] = [];

	const toOption = (manga: T): ComboboxOptionProps<T> => ({
		value: manga,
		label: manga.title,
		disabled: manga.disabled
	});

	const {
		elements: { menu, input, option, label },
		states: { open, inputValue, touchedInput, selected },
		helpers: { isSelected }
	} = createCombobox<T>({
		forceVisible: props['force-visible']
	});
</script>

<div class="flex flex-col gap-1">
	<label use:melt={$label} for="combobox">Choose your favorite manga:</label>

	<div class="relative mt-2">
		<input
			use:melt={$input}
			id="combobox"
			type="text"
			role="combobox"
			aria-controls="options"
			aria-expanded="false"
		/>
		<button aria-label="input" type="button">
			<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
				<path
					fill-rule="evenodd"
					d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
</div>
{#if $open}
	<ul use:melt={$menu} transition:fly={{ duration: 150, y: -5 }} id="options" role="listbox">
		<div>
			{#each mangas as manga, index (index)}
				<li use:melt={$option(toOption(manga))}>
					{#if $isSelected(manga)}
						<span>
							<svg
								class="size-5"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
					{/if}
					<div class="pl-4">
						<span>{manga.title}</span>
					</div>
				</li>
			{:else}
				<li>No results found</li>
			{/each}
		</div>
	</ul>
{/if}
