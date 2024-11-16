<script lang="ts">
	import { ctxForm, useForm } from '$lib/composables/form.js';
	import type { FormProps } from './form.js';

	let { form = $bindable(), ...props }: FormProps = $props();

	const formerize = useForm(props.schema, {
		id: props['id'],
		applyAction: props['apply-action'],
		invalidateAll: props['invalidate-all'],
		resetForm: props['reset-form'],
		scrollToError: props['scroll-to-error'],

		/** break -5 */
		autoFocusOnError: props['auto-focus-on-error'],
		errorSelector: props['error-selector'],
		selectErrorText: props['select-error-text'],
		stickyNavbar: props['sticky-navbar'],
		taintedMessage: props['tainted-message'],

		/** break -5 */
		SPA: props['spa'],
		onSubmit: props['on-submit'],
		onResult: props['on-result'],
		onUpdate: props['on-update'],
		onUpdated: props['on-updated'],

		/** break -5 */
		onError: props['on-error'],
		onChange: props['on-change'],
		dataType: props['data-type'],
		jsonChunkSize: props['json-chunk-size'],
		validators: props['validators'],

		/** break -5 */
		validationMethod: props['validation-method'],
		customValidity: props['custom-validity'],
		clearOnSubmit: props['clear-on-submit'],
		delayMs: props['delay-ms'],
		timeoutMs: props['timeout-ms'],

		/** break -5 */
		multipleSubmits: props['multiple-submits'],
		syncFlashMessage: props['sync-flash-message'],
		flashMessage: props['flash-message'],
		warnings: props['warnings'],
		legacy: props['legacy']
	});

	const ctx = ctxForm();
	const { enhance, proxy } = formerize;
	ctx.set(proxy);
</script>

<form use:enhance {...props}>
	{@render props.children?.()}
</form>
