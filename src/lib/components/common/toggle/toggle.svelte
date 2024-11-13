<script lang="ts">
	/** Imports */
	import { melt } from '@melt-ui/svelte';
	import type { ToggleProps } from './toggle.js';
	import { useToggle } from '$lib/composables/toggle.js';

	/** Props */
	let { ...props }: ToggleProps = $props();
	const toggle = useToggle();
	const { value, on, off } = toggle.get();
	const state: boolean = $value || props.state === 'on' ? true : false;
	const action: any = state ? off : on;
	/** Styles */
</script>

<span data-ui="toggle" use:melt={$action} {...props}>
	{@render props.children()}
</span>
