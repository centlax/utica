<script lang="ts">
	/** Imports */
	import { label, type LabelProps } from './label.js';
	import { ctxField } from '$lib/composables/form.js';
	import { useUI } from '$lib/utian/index.js';
	import { cn } from '$lib/utils/merge.js';
	import { stringify } from '$lib/utian/utils.js';

	/** Props */
	let { ...props }: LabelProps = $props();

	let ctx = ctxField();
	let { name } = ctx.get();

	/** Styles */
	const ui = useUI(label, props.class, props.override);
</script>

<label {...props} for={props.for || name} class={cn(stringify(ui.root), ui.class)}>
	{@render props.children?.()}
	{props.about}
</label>
