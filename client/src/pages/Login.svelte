<script>

	import Button from "../components/Button.svelte";
	import {navigateTo} from 'svelte-router-spa';
    //import InputPass from "../components/InputPass.svelte";
	import Input from "../components/Input.svelte";
    
	let warn;

	import {user} from '../stores.js'
    import MainTitle from "../components/MainTitle.svelte";

    function onLogin(event){
		console.log($user.name)
		console.log($user.pass)
		event.preventDefault();
		if (!$user.name){
			warn = 'Insira seu usuário';
			return;
		}

		if (!$user.pass){
			warn = 'Insira sua senha';
			return;
		}

		fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({
				usuario: $user.name,
				senha: $user.pass,
			})
		})
		.then(resp => resp.json())
		.then(json => {
			if (json.status.toUpperCase() === 'NOK') {
				warn = json.data
				return
			}
			
			sessionStorage.setItem('loggedIn', true);
			sessionStorage.setItem('user', $user.name);
			sessionStorage.setItem('userName', json.data.full_name);
			sessionStorage.setItem('warehouse', $user.warehouse);
			$user.name = json.data.full_name;
			$user.pass = null;
			navigateTo('menupage');
		
		})
		.catch(err => {
			warn = err;
			$user.pass = '';
		})
	}

</script>



<main id="main-content">
	<MainTitle text="Login"/>
	<h2>Faça login agora e conheça as <b>Cobras Fumantes</b></h2>
	
	
	<form action="POST" autocomplete="off" on:submit|preventDefault>
		<Input type="text" autocomplete=false name="usuario" label="Usuário" placeholder="Seu usuário" required icon="/images/user.svg" bind:value={$user.name} />
		<Input type="password" autocomplete=false name="senha" label="Senha" placeholder="Sua senha" required icon="/images/lock.svg" bind:value={$user.pass} showLock />
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
	h2, p {
		color: #FFF !important;
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

