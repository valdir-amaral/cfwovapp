<script>
	import { pbStore } from './stores.js';
	pbStore.set(location);
	
	import { Router } from 'svelte-router-spa';
    import { routes } from './routes';
	let options = { gaPageviews: true};	
</script>


<Router {routes} {options} />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>