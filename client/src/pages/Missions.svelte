<script>
    import { pbStore } from "../stores";
    import {navigateTo} from 'svelte-router-spa'
    import Fetch from "../components/Fetch.svelte";
    import Header from "../components/Header.svelte";
    import Modal from "../components/Modal.svelte";
    import FullList from "../components/db/FullList.svelte";
    import User from '../components/db/User.svelte'
    const clanID = "8a1ead4a-2269-4ae8-95b3-afce4639bd15";
    
    let ativo = false;
    let nomeMissao
    let missao
    if(nomeMissao === undefined && localStorage.nomeMissao) nomeMissao = localStorage.nomeMissao
    else if (!localStorage.nomeMissao) nomeMissao = 'nenhuma'
    var missaoFocada
    let missaoId
    function openModal(event) {
        ativo = !ativo
        missaoId = event.target.parentElement.previousElementSibling.innerText.slice(4)
        missaoFocada = event.target.previousElementSibling.src.slice(35).replace('@2x.jpg', '')
    }

    async function votar() {
        if(!$pbStore.authStore.isValid) {
            alert('não pode votar, animal')
            missaoId = ''
            missaoFocada = ''
            return
        }

        nomeMissao = missaoFocada
        localStorage.nomeMissao = missaoFocada
        if (localStorage.voto) {
            const voto = await $pbStore.collection('votos').update(localStorage.voto, {"skin": missaoFocada, "user": localStorage.username})
            .then((res) => {
                localStorage.voto = res.id
            })
        } else {
            let data = {
                user: localStorage.username,
                skin: missaoFocada,
                idmissao: missaoId,
                idplayer: localStorage.idPlayer
            }
            await $pbStore.collection('votos').create(data)
            .then(res => {
                localStorage.voto = res.id
            })
            .catch(error => {
                console.log(error)
            })
            
        }
    }

        
</script>

<Header titulo="Missões"/>
<!-- svelte-ignore a11y-missing-attribute -->
<User>
    <!-- svelte-ignore missing-declaration -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div style="margin-top: 20px;" slot="signedout"><p>Ei, visitante, você não pode votar em uma missão, porque não está cadastrado, <button on:click={() => navigateTo('/')}>FAÇA LOGIN</button></p></div>
</User>
<FullList collection="votos" batch=50 let:records>
    <p>Total de votos: {records.length}</p>
    <span slot="error" let:error>{error}</span>
</FullList>
<p>Missão votada: {nomeMissao}</p>

<Modal bind:ativo bind:missaoFocada
tituloModal="Confirmação"
corpoModal={`Quer mesmo votar nessa (${missaoFocada})? Lembre-se que você tem só um voto`}
on:confirm={votar}/>
<Fetch endpoint="clans/{clanID}/quests/available" let:data>
    <ul>
        {#each data as mission}
            
            {#if mission.purchasableWithGems}
            <p class="text-sub"><i class="fa-regular fa-gem"></i> -> Gemas</p>
    
            {:else if !mission.purchasableWithGems}
            <p class="text-sub"><i class="fa-solid fa-coins"></i> -> Ouro</p>
            {/if}
            <p>id: <span>{mission.id}</span></p>
            <li class="card-mission"><img class="img-mis" src="{mission.promoImageUrl.replace(".jpg", "@2x.jpg")}" alt="">
                <button on:click={openModal} class="btn-vote">⇈ Vote ⇈</button>
            </li>

        {/each}
    </ul>
</Fetch>

<style>
    ul {
        list-style: none;
        display: flex;
        gap: 20px;
        flex-direction: column;
        width: fit-content;
        justify-content: center;
        padding: 30px 15px;
        margin: 0px auto;
        max-width: 600px;
    }
    .text-sub {
        margin-top: 10px;
    }
    .btn-vote {
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        -webkit-padding: 0.4em 0;
        padding: 0.4em;
        margin: 0 0 0.5em 0;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 2px;
    }
    .card-mission {
        margin: auto;
        margin-top: 30px
    }
    .img-mis {
        width: 100%;
    }
</style>