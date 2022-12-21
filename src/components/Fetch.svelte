<script>
    import { onMount } from "svelte";
    export let endpoint = '';
    let data = [];
    const botID = '1739c236-bce3-4830-b9fd-b493fb55cd5f'
    const keyAPI = 'lv54QwdhOaTdAKCBcVCobHu2a2LYInHmGFlXP1N1K6eCQEYiUjXKoMStIOnLRyZx'

    onMount(async function() {
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bot ${keyAPI}`,

      });
      const response = await fetch(
        `https://api.wolvesville.com/${endpoint}`, {
          headers: headers,
        });
      const json = await response.json();
      data = json;
      console.log(data)
    });
</script>

<slot {data}/>