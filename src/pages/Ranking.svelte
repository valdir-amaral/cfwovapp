<script>
    import Fetch from "../components/Fetch.svelte";
    const clanID = "8a1ead4a-2269-4ae8-95b3-afce4639bd15";
    
 
</script>

{#if clanID}
<h1>
    Ranking de xp
</h1>
<Fetch endpoint="/clans/{clanID}/members" let:data>
    <ul>
        {#each data as user}
            <li>{user.username} xp: {user.xp}</li>
        {/each}
    </ul>
</Fetch>
{:else}
<h1>Busque o seu clan!</h1>
{/if}

<style>
    h1 {
        text-align: center;
        padding: 30px;
    }
   
</style>