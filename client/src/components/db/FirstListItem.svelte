<script>
	import { pbStore } from "../../stores.js";
	
	export let collection;
	export let filter;
	export let query = undefined;
	
	const record = $pbStore.collection(collection).getFirstListItem(filter, query);
</script>

{#await record then data}
	{#if !data}
		<slot name="loading" />
	{/if}
	<slot record={data} />
{:catch error}
	<slot name="error" {error} />
{/await}