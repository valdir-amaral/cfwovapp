<script>
    import { onMount } from "svelte";
    import ButtonMenu from "../components/ButtonMenu.svelte";
    
    onMount(() => {
        let id = localStorage.id ? localStorage.id : Math.random().toString(16).substr(2);
        localStorage.setItem('id', id)
    })
</script>

<i class="fa-solid fa-staff-snake"></i>
<h2>
    Bom dia! <br>
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