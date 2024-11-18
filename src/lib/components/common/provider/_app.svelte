<script lang="ts">
	const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
	let colors = $state({});
</script>

<svelte:head>
	<style id="utica-colors" type="text/css">
		:root {
			--ui-color-primary-50: var(--color-green-50);
			--ui-color-primary-100: var(--color-green-100);
			--ui-color-primary-200: var(--color-green-200);
			--ui-color-primary-300: var(--color-green-300);
			--ui-color-primary-400: var(--color-green-400);
			--ui-color-primary-500: var(--color-green-500);
			--ui-color-primary-600: var(--color-green-600);
			--ui-color-primary-700: var(--color-green-700);
			--ui-color-primary-800: var(--color-green-800);
			--ui-color-primary-900: var(--color-green-900);
			--ui-color-primary-950: var(--color-green-950);

			--ui-color-neutral-50: var(--color-neutral-50);
			--ui-color-neutral-100: var(--color-neutral-100);
			--ui-color-neutral-200: var(--color-neutral-200);
			--ui-color-neutral-300: var(--color-neutral-300);
			--ui-color-neutral-400: var(--color-neutral-400);
			--ui-color-neutral-500: var(--color-neutral-500);
			--ui-color-neutral-600: var(--color-neutral-600);
			--ui-color-neutral-700: var(--color-neutral-700);
			--ui-color-neutral-800: var(--color-neutral-800);
			--ui-color-neutral-900: var(--color-neutral-900);
			--ui-color-neutral-950: var(--color-neutral-950);

			--ui-color-success-50: var(--color-green-50);
			--ui-color-success-100: var(--color-green-100);
			--ui-color-success-200: var(--color-green-200);
			--ui-color-success-300: var(--color-green-300);
			--ui-color-success-400: var(--color-green-400);
			--ui-color-success-500: var(--color-green-500);
			--ui-color-success-600: var(--color-green-600);
			--ui-color-success-700: var(--color-green-700);
			--ui-color-success-800: var(--color-green-800);
			--ui-color-success-900: var(--color-green-900);
			--ui-color-success-950: var(--color-green-950);

			--ui-color-warning-50: var(--color-yellow-50);
			--ui-color-warning-100: var(--color-yellow-100);
			--ui-color-warning-200: var(--color-yellow-200);
			--ui-color-warning-300: var(--color-yellow-300);
			--ui-color-warning-400: var(--color-yellow-400);
			--ui-color-warning-500: var(--color-yellow-500);
			--ui-color-warning-600: var(--color-yellow-600);
			--ui-color-warning-700: var(--color-yellow-700);
			--ui-color-warning-800: var(--color-yellow-800);
			--ui-color-warning-900: var(--color-yellow-900);
			--ui-color-warning-950: var(--color-yellow-950);

			--ui-color-danger-50: var(--color-red-50);
			--ui-color-danger-100: var(--color-red-100);
			--ui-color-danger-200: var(--color-red-200);
			--ui-color-danger-300: var(--color-red-300);
			--ui-color-danger-400: var(--color-red-400);
			--ui-color-danger-500: var(--color-red-500);
			--ui-color-danger-600: var(--color-red-600);
			--ui-color-danger-700: var(--color-red-700);
			--ui-color-danger-800: var(--color-red-800);
			--ui-color-danger-900: var(--color-red-900);
			--ui-color-danger-950: var(--color-red-950);

			--primary: var(--color-primary-500);
			--secondary: var(--color-secondary-500);
			--success: var(--color-success-500);
			--info: var(--color-info-500);
			--warning: var(--color-warning-500);
			--danger: var(--color-danger-500);
		}
		.dark {
			--primary: var(--color-primary-600);
			--secondary: var(--color-secondary-600);
			--success: var(--color-success-600);
			--info: var(--color-info-600);
			--warning: var(--color-warning-600);
			--danger: var(--color-danger-600);
		}
	</style>
	<style id="utica-radius">
		:root {
			--ui-radius: 0.25rem;
		}
	</style>
</svelte:head>
