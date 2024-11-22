<script lang="ts">
	import { useDark } from '$lib/composables/dark.js';
	const dark = useDark();
</script>

<button class="text-white dark:text-gray-900" onclick={dark.toggle}> mode chage </button>
