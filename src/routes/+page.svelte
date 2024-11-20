<script lang="ts">
	import {
		UAccordion,
		UAvatar,
		UBadge,
		UChip,
		UDashAside,
		UDashLayout,
		UDashMain
	} from '$lib/index.js';
	import type { Link } from '$lib/types/link.js';

	const links: Link[] = [{ label: 'df', shimmy: 'skldj' }];
</script>

<UAvatar
	class="mx-auto mt-10 size-8"
	src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
>
	<UChip float="bottom-left" />
</UAvatar>
<div class="w-10 bg-neutral-900 p-10">
	<UBadge>10</UBadge>
</div>

<UAccordion items={links}></UAccordion>
<UDashLayout>
	<UDashAside items={links} show-title />
	<UDashMain />
</UDashLayout>
