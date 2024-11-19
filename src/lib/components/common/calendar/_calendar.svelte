<script lang="ts">
	import { createCalendar, melt } from '@melt-ui/svelte';
	import { CalendarDate, isSameDay } from '@internationalized/date';

	const halloween = new CalendarDate(2025, 10, 31);

	const {
		elements: { calendar, heading, grid, cell, prevButton, nextButton },
		states: { months, headingValue, weekdays, value },
		helpers: { isDateDisabled, isDateUnavailable }
	} = createCalendar({
		defaultPlaceholder: new CalendarDate(2023, 10, 1)
	});

	$: if ($value && isSameDay($value, halloween)) {
		alert('Happy Halloween! 🎃');
	}
</script>

<div data-ui="calendar" class="max-w-sm" use:melt={$calendar}>
	<header>
		<button use:melt={$prevButton}> Back </button>
		<div use:melt={$heading}>
			{$headingValue}
		</div>
		<button use:melt={$nextButton}> Next </button>
	</header>
	<div>
		{#each $months as month}
			<table use:melt={$grid}>
				<thead aria-hidden="true">
					<tr>
						{#each $weekdays as day}
							<th>
								<div>
									{day}
								</div>
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each month.weeks as weekDates}
						<tr>
							{#each weekDates as date}
								<td
									role="gridcell"
									aria-disabled={$isDateDisabled(date) || $isDateUnavailable(date)}
								>
									<div use:melt={$cell(date, month.value)}>
										{date.day}
									</div>
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		{/each}
	</div>
</div>

<style lang="postcss">
	[data-melt-calendar] {
		@apply w-full rounded-lg bg-neutral-800/90 p-3 text-white shadow-sm;
	}

	header {
		@apply flex items-center justify-between pb-2 text-sm sm:text-base;
	}

	header + div {
		@apply flex flex-col items-start gap-6 sm:flex-row;
	}

	[data-melt-calendar-prevbutton] {
		@apply rounded-lg p-1 transition-all hover:bg-sky-500/20;
	}

	[data-melt-calendar-nextbutton] {
		@apply rounded-lg p-1 transition-all hover:bg-sky-500/20;
	}

	[data-melt-calendar-prevbutton][data-disabled] {
		@apply pointer-events-none rounded-lg p-1 opacity-40;
	}

	[data-melt-calendar-nextbutton][data-disabled] {
		@apply pointer-events-none rounded-lg p-1 opacity-40;
	}

	[data-melt-calendar-heading] {
		@apply font-semibold;
	}

	thead {
		@apply text-neutral-500;
	}

	th {
		@apply text-sm font-semibold;

		& div {
			@apply flex h-6 w-6 items-center justify-center p-4;
		}
	}

	[data-melt-calendar-grid] {
		@apply w-full;
	}

	[data-melt-calendar-cell] {
		@apply flex h-6 w-6 cursor-pointer select-none items-center justify-center rounded-lg p-4 hover:bg-sky-500/20 focus:ring focus:ring-sky-400;
	}

	[data-melt-calendar-cell][data-disabled] {
		@apply pointer-events-none opacity-40;
	}

	[data-melt-calendar-cell][data-unavailable] {
		@apply pointer-events-none text-red-400 line-through;
	}

	[data-melt-calendar-cell][data-selected] {
		@apply bg-sky-400 text-neutral-950;
	}

	[data-melt-calendar-cell][data-outside-visible-months] {
		@apply pointer-events-none cursor-default opacity-40 hover:bg-transparent;
	}

	[data-melt-calendar-cell][data-outside-month] {
		@apply pointer-events-none cursor-default opacity-0 hover:bg-transparent;
	}
</style>
