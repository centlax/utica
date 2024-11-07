<script lang="ts">
	import { createAvatar, melt } from '@melt-ui/svelte';

	const {
		elements: { image, fallback }
	} = createAvatar({
		src: 'https://avatars.githubusercontent.com/u/1162160?v=4'
	});
</script>

<div class="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
	<img use:melt={$image} alt="Avatar" class="h-full w-full rounded-[inherit]" />
	<span use:melt={$fallback} class="text-magnum-700 text-3xl font-medium">RH</span>
</div>
