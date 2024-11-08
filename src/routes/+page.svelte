<script lang="ts">
	import { useToast } from '$lib/composables/toast.js';

	const { create } = useToast();

	function toast() {
		create({
			data: warn
		});
	}
</script>

{#snippet warn()}
	<div class="rounded-lg bg-neutral-800 text-white shadow-md">
		<div
			class="relative flex w-[24rem] max-w-[calc(100vw-2rem)] items-center justify-between gap-4 p-5"
		>
			<div>
				<h3 class="flex items-center gap-2 font-semibold">
					Success
					<span class="size-1.5 rounded-full bg-green-500"></span>
				</h3>
				<div>The resource was created!</div>
			</div>
			<button
				class="absolute right-4 top-4 grid size-6 place-items-center rounded-full text-sky-500
          hover:bg-sky-900/50"
			>
				<span class="size-4">X</span>
			</button>
		</div>
	</div>
{/snippet}

<section
	class="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between p-6 lg:px-8"
>
	<button onclick={toast}> Create </button>
</section>
