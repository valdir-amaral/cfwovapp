<script>
	import { pbStore } from '../../stores.js'
	
	export let collection;
	export let batch;
	export let query = undefined;
	
	const records = $pbStore.collection(collection).getFullList(batch, query);
</script>

{#await records then data}
	{#if !data}
		<slot name="loading" />
	{/if}
	<slot records={data} />
{:catch error}
	<slot name="error" {error} />
{/await}