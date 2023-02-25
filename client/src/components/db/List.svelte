<script>
	import { pbStore } from '../../stores.js';
	
	export let collection;
	export let page;
	export let perPage;
	export let query = undefined;
	
	function numToArray(num) {
		return Array.from({length: num}, (_, i) => i + 1);
	}
	
	$: resultList = $pbStore.collection(collection).getList(page, perPage, query);
</script>

{#await resultList then data}
	{#if !data}
		<slot name="loading" />
	{/if}
	<slot records={data} items={data.items} pages={numToArray(data.totalPages)} />
{:catch error}
	<slot name="error" {error} />
{/await}