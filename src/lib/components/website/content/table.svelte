<script lang="ts">
    import Tree from './tree.svelte';
    import { createTableOfContents } from '@melt-ui/svelte';
    import { pushState } from '$app/navigation';
  
    const {
      elements: { item },
      states: { activeHeadingIdxs, headingsTree },
    } = createTableOfContents({
      selector: '#toc-builder-preview',
      exclude: ['h1', 'h4', 'h5', 'h6'],
      activeType: 'all',
      /**
       * Here we can optionally provide SvelteKit's `pushState` function.
       * This function preserve navigation state within the framework.
       */
      pushStateFn: pushState,
      headingFilterFn: (heading) => !heading.hasAttribute('data-toc-ignore'),
      scrollFn: (id) => {
        /**
         * Here we're overwriting the default scroll function
         * so that we only scroll within the ToC preview
         * container, instead of the entire page.
         */
        const container = document.getElementById('toc-builder-preview');
        const element = document.getElementById(id);
  
        if (container && element) {
          container.scrollTo({
            top: element.offsetTop - container.offsetTop - 16,
            behavior: 'smooth',
          });
        }
      },
    });
  
    let hideHeading = false;
  </script>
  
  <div
    class="grid h-[18rem] grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2"
  >
    <div
      id="toc-builder-preview"
      class="space-y-2 overflow-y-auto rounded-lg bg-white p-4 text-neutral-900"
    >
      <button on:click={() => (hideHeading = !hideHeading)} class="hide-heading">
        {hideHeading ? 'Show heading' : 'Hide heading'}
      </button>
  
      {#if !hideHeading}
        <h2>First Heading</h2>
        <p>This is the first heading.</p>
  
        <h3>Sub-Heading</h3>
        <p>This is a sub-heading H3 example.</p>
      {/if}


    </div>
  
    <div class="overflow-y-auto rounded-lg bg-white p-4">
      <p class="font-semibold text-neutral-900">On This Page</p>
      <nav>
        {#key $headingsTree}
          <Tree
            tree={$headingsTree}
            activeHeadingIdxs={$activeHeadingIdxs}
            {item}
          />
        {/key}
      </nav>
    </div>
  </div>
  
