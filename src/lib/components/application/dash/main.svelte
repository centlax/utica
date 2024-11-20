<script lang="ts">
	/** Imports */
    import { type DashMainProps, dashMain } from './main.js'

	/** Props */
    let {...props}: DashMainProps = $props()

	/** Styles */
</script>


<main>
{@render props.children?.()}
</main>