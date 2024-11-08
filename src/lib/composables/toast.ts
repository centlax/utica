import { help } from '$lib/components/common/toast/toast.svelte';
export function useToast() {
	return {
		create: help.addToast,
		update: help.updateToast,
		remove: help.removeToast
	};
}
