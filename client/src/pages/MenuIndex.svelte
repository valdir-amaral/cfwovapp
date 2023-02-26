<script>
    import { onMount } from "svelte";
    import ButtonMenu from "../components/ButtonMenu.svelte";

    function alteraId(username) {
            if(username === undefined) {
                return
            }
            if(!localStorage['idPlayer'] && localStorage['username'] != undefined) {
                fetch(`https://api.wolvesville.com/players/search?username=${localStorage['username']}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bot lv54QwdhOaTdAKCBcVCobHu2a2LYInHmGFlXP1N1K6eCQEYiUjXKoMStIOnLRyZx'
                    }
                })
                .then((r) => r.json())
                .then((json) => localStorage.idPlayer = json.id)
            }
        }
    onMount(() => {
        let username = localStorage['username']
        alteraId(username)
    })
</script>

<i class="fa-solid fa-staff-snake"></i>
<h2>
    Bom dia, {localStorage.username ? localStorage.username : 'Desconhecido'}! <br>
    Seja muito bem-vindo(a)
</h2>
<h1>
    Cobras Fumantes
</h1>
<h3>Selecione a opção</h3>
<div id="container">
    <ButtonMenu nav="missions" text="Vote Já!" image="fa-solid fa-users"/>
    <ButtonMenu nav="" text="Sobre Nós" image="fa-solid fa-heart"/>
    <ButtonMenu nav="ranking" text="Ranking" image="fa-solid fa-medal"/>
    <ButtonMenu nav="" text="Redes Sociais" image="fa-solid fa-hashtag"/>

</div>


<style>
#container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
    padding: 30px;
}
h1 {
    text-align: center;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 29.5px;
    width: fit-content;
    margin: auto;
    padding: 20px;
}

h2 {
    text-align: center;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 19px;
    width: fit-content;
    margin: 10px auto 30px auto;
}
h3 {
    text-align: center;
    color: #FFFFFF;
    font-weight: 300;
    font-size: 16px;
    width: fit-content;
    margin: auto;
}
.fa-staff-snake {
    display: block;
    padding: 30px;
    color: #FFFFFF;
    font-size: 80px;
    text-align: center;
    margin: auto;
}

</style>