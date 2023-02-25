<script>
    export let items;
    export let pages;
</script>

{#each items as item}
	<slot {item} />
{/each}

{#if pages && $$slots.pages}
	{#each pages as pageNumber}
		<slot name="pages" {pageNumber} />
	{/each}
{/if}