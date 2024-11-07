<script lang="ts">
	/** Imports */
	import { type FooterProps } from './footer.js';

	/** Props */
	let { ...props }: FooterProps = $props();
</script>

{#snippet links()}
	{#if props.links}
		{#each props.links as link, index}
			<div class="md:grid md:grid-cols-2 md:gap-8">
				<div class={index === 0 ? '' : 'mt-10 md:mt-0'}>
					<h3 class="text-sm/6 font-semibold text-gray-900">{link.title}</h3>
					<ul role="list" class="mt-6 space-y-4">
						{#if link.links}
							{#each link.links as { label }}
								<li>
									<a href="/" class="text-sm/6 text-gray-600 hover:text-gray-900">{label}</a>
								</li>
							{/each}
						{/if}
					</ul>
				</div>
			</div>
		{/each}
	{/if}
{/snippet}

<footer class="bg-white" {...props}>
	<div class="w-full pb-8 pt-16 sm:pt-24 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				{#if props.children}
					{@render props.children()}
				{/if}
			</div>
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				{@render links()}
			</div>
		</div>
		<div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-sm/6 text-gray-600">&copy; 2024 Your Company, Inc. All rights reserved.</p>
		</div>
	</div>
</footer>
