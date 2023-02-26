<script>
    import _ from 'lodash'
    import Fetch from "../components/Fetch.svelte";
    import Header from "../components/Header.svelte";
    const clanID = "8a1ead4a-2269-4ae8-95b3-afce4639bd15";
    
 
</script>
<Header titulo="Voltar"/>
<h1>
    Ranking de xp
</h1>

<Fetch endpoint="clans/{clanID}/members" let:data>
    <ul>
        {#each _.orderBy(data, ['user', 'xp'], ['desc', 'desc'])  as user}
            <li><span style="background-color: {user.profileIconColor};"></span>{user.username} ➙ {user.xp}xp</li>
        {/each}
    </ul>
</Fetch>


<style>
    h1 {
        text-align: center;
        padding: 30px;
    }
    span {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: block;
    }
    ul {
        width: 80%;
        margin: auto;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    li {
        display: flex;
        gap: 20px;
        align-items: center;
    }
</style>