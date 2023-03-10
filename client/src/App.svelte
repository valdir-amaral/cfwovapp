<script>
	import { pbStore } from './stores.js';
	pbStore.set(`${location.origin}`);

	import { Router } from 'svelte-router-spa';
    import { routes } from './routes';
	let options = { gaPageviews: true};
</script>

<Router {routes} {options} slot="user"/>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>