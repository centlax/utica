import { createDialog } from '@melt-ui/svelte';

export const {
	elements: { trigger, overlay, content, title, description, close, portalled },
	states: { open }
} = createDialog({
	forceVisible: true
});
