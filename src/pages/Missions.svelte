<script>
    import Fetch from "../components/Fetch.svelte";
    import Header from "../components/Header.svelte";
    import Modal from "../components/Modal.svelte";
    import {voto} from '../stores.js'
    const clanID = "8a1ead4a-2269-4ae8-95b3-afce4639bd15";
    const botID = '1739c236-bce3-4830-b9fd-b493fb55cd5f'
    const keyAPI = 'lv54QwdhOaTdAKCBcVCobHu2a2LYInHmGFlXP1N1K6eCQEYiUjXKoMStIOnLRyZx'
    
    let ativo = false;

    var missaoFocada
    function openModal(event) {
        ativo = !ativo
        missaoFocada = event.target.previousElementSibling.src.slice(35).replace('@2x.jpg', '')
        alert(missaoFocada)
    }
    
    function mandarmsg(msg) {
        fetch("https://api.wolvesville.com/clans/8a1ead4a-2269-4ae8-95b3-afce4639bd15/chat", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bot ${keyAPI}`
        }, 
        body: JSON.stringify({
            'message': msg
        })
    })
}
    
        
    
</script>

<Header titulo="Missões"/>
<button on:click={() => {
    mandarmsg(prompt('msg:'))
}}>
    Mandar Mensagem
</button>
<p>Total de votos:</p>
{#if $voto}
<p>Missão votada: {$voto.mission}</p>
{/if}
<Modal bind:ativo bind:missaoFocada
tituloModal="Confirmação"
corpoModal={`Quer mesmo votar nessa (${missaoFocada})? Lembre-se que você tem só um voto`}/>
<Fetch endpoint="clans/{clanID}/quests/available" let:data>
    <ul>
        {#each data as mission}

        {#if mission.purchasableWithGems}
        <i class="fa-regular fa-gem"></i>
        <li class="card-mission"><img class="img-mis" src="{mission.promoImageUrl.replace(".jpg", "@2x.jpg")}" alt="">
            <button on:click={openModal} class="btn-vote">⇈ Vote ⇈</button>
        </li>
        {/if}

        {#if !mission.purchasableWithGems}
        <i class="fa-solid fa-coin"></i>
        <li class="card-mission"><img class="img-mis" src="{mission.promoImageUrl.replace(".jpg", "@2x.jpg")}" alt="">
        <button on:click={openModal} class="btn-vote">⇈ Vote ⇈</button>
        </li>
        
        {/if}

        {/each}
    </ul>
</Fetch>
<style>
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        width: fit-content;
        justify-content: center;
        padding: 30px 15px;
        margin: 0px auto;
        max-width: 600px;
    }
    .btn-vote {
        width: 100%;
    }
    .card-mission {
        margin: auto;
    }
    .img-mis {
        width: 100%;
    }
</style>