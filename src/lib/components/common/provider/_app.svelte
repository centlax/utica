<script lang="ts">
	const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
	let colors = $state({});
</script>

<svelte:head>
	<style id="utica-colors" type="text/css">
		:root {
			--color-primary-50: var(--color-sky-50);
			--color-primary-100: var(--color-sky-100);
			--color-primary-200: var(--color-sky-200);
			--color-primary-300: var(--color-sky-300);
			--color-primary-400: var(--color-sky-400);
			--color-primary-500: var(--color-sky-500);
			--color-primary-600: var(--color-sky-600);
			--color-primary-700: var(--color-sky-700);
			--color-primary-800: var(--color-sky-800);
			--color-primary-900: var(--color-sky-900);
			--color-primary-950: var(--color-sky-950);

			--color-neutral-50: var(--color-neutral-50);
			--color-neutral-100: var(--color-neutral-100);
			--color-neutral-200: var(--color-neutral-200);
			--color-neutral-300: var(--color-neutral-300);
			--color-neutral-400: var(--color-neutral-400);
			--color-neutral-500: var(--color-neutral-500);
			--color-neutral-600: var(--color-neutral-600);
			--color-neutral-700: var(--color-neutral-700);
			--color-neutral-800: var(--color-neutral-800);
			--color-neutral-900: var(--color-neutral-900);
			--color-neutral-950: var(--color-neutral-950);

			--color-success-50: var(--color-green-50);
			--color-success-100: var(--color-green-100);
			--color-success-200: var(--color-green-200);
			--color-success-300: var(--color-green-300);
			--color-success-400: var(--color-green-400);
			--color-success-500: var(--color-green-500);
			--color-success-600: var(--color-green-600);
			--color-success-700: var(--color-green-700);
			--color-success-800: var(--color-green-800);
			--color-success-900: var(--color-green-900);
			--color-success-950: var(--color-green-950);

			--color-warning-50: var(--color-yellow-50);
			--color-warning-100: var(--color-yellow-100);
			--color-warning-200: var(--color-yellow-200);
			--color-warning-300: var(--color-yellow-300);
			--color-warning-400: var(--color-yellow-400);
			--color-warning-500: var(--color-yellow-500);
			--color-warning-600: var(--color-yellow-600);
			--color-warning-700: var(--color-yellow-700);
			--color-warning-800: var(--color-yellow-800);
			--color-warning-900: var(--color-yellow-900);
			--color-warning-950: var(--color-yellow-950);

			--color-danger-50: var(--color-red-50);
			--color-danger-100: var(--color-red-100);
			--color-danger-200: var(--color-red-200);
			--color-danger-300: var(--color-red-300);
			--color-danger-400: var(--color-red-400);
			--color-danger-500: var(--color-red-500);
			--color-danger-600: var(--color-red-600);
			--color-danger-700: var(--color-red-700);
			--color-danger-800: var(--color-red-800);
			--color-danger-900: var(--color-red-900);
			--color-danger-950: var(--color-red-950);

			--primary: var(--color-primary-500);
			--secondary: var(--color-secondary-500);
			--success: var(--color-success-500);
			--info: var(--color-info-500);
			--warning: var(--color-warning-500);
			--danger: var(--color-danger-500);
		}
		.dark {
			--primary: var(--color-primary-600);
			--nuetral: var(--color-secondary-600);
			--success: var(--color-success-600);
			--warning: var(--color-warning-600);
			--danger: var(--color-danger-600);
		}
	</style>
	<style id="utica-radius">
		:root {
			--radius: 0.25rem;
		}
	</style>
</svelte:head>
