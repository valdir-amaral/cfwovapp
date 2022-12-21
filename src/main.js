var exports = {};

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		clanID: null
	}
});

export default app;