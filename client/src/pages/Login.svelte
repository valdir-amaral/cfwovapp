<script>
	import { pbStore } from '../stores.js'
	import Button from "../components/Button.svelte";
	import {navigateTo} from 'svelte-router-spa';
	import Input from "../components/Input.svelte";
    
	let warn;

	import { user } from '../stores.js'
    import MainTitle from "../components/MainTitle.svelte";

	function clearWarn() {
		warn = ''
	}
    async function onLogin() {
		if (!$user.name.length || !$user.pass.length) {
			return
		}
        await $pbStore.collection('usuarios').authWithPassword($user.name, $user.pass)
		.then((res) => {
			if($pbStore.authStore.isValid) {
				localStorage['username'] = $pbStore.authStore.model.username
				navigateTo('/inicio')
			}
		})
		.catch((err) => {

			warn = 'Usuário e/ou senha incorretos'
		})
		
    }

</script>



<main id="main-content">
	<MainTitle text="Login"/>
	<h2>Faça login agora e conheça as <b>Cobras Fumantes</b></h2>
	
	
	<form action="POST" autocomplete="off" on:submit|preventDefault>
		<Input on:onfocus={clearWarn} type="text" autocomplete=false name="usuario" label="Usuário" placeholder="Seu usuário" required icon="/images/user.svg" bind:value={$user.name} />
		<Input on:onfocus={clearWarn} type="password" autocomplete=false name="senha" label="Senha" placeholder="Sua senha" required icon="/images/lock.svg" bind:value={$user.pass} showLock />
		{#if warn}
		<p>{warn}</p>
		{/if}

		<Button text="Login" on:click={onLogin}/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-missing-attribute -->
		<a on:click={() => navigateTo('/inicio')}>Sou de fora e só quero conhecer vocês</a>
	</form>
	
	

	
</main>


<style>
	#main-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	form {
		width: 80%;
		max-width: 400px;
	}
	h2 {
		width: 80%;
		line-height: 25px;
		max-width: 400px;
	}
	h2, p {
		color: #FFF !important;
	}
	p {
		margin-bottom: 10px;
	}
	a {
		color: #FFF;
		margin-top: 20px;
		text-align: center;
		display: block;
		cursor: pointer;
		text-decoration: underline;
	}
</style>

