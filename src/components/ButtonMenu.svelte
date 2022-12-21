<script>
    import {navigateTo} from "svelte-router-spa";
    export let text = '';
    export let image = '';
    export let nav = '';
    function navegar() {
        navigateTo(nav)
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="btn-menu" on:click={navegar}>
    <i class="{image}"></i>
    <span class="subtitle">{text}</span>
</div>
<style>
    .btn-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 93px;
        height: 93px;
        background-color: white;
        border-radius: 10px;
        margin: 15px;
        position: relative;
        cursor: pointer;
    }
     .btn-menu:hover {
         animation-name: btn-animation;
         animation-duration: 0.5s;
         animation-fill-mode: forwards;
         background-color: #103013;
    
     }
     .btn-menu:hover > span {
         color: #FFFFFF;
     }
    .btn-menu:hover > i {
        color: #FFFFFF;
    }
     .subtitle {
         position: absolute;
         bottom: 15px;
         z-index: 1000;
         color: rgb(29, 82, 19);
         font-size: 12px;
         font-weight: 500;
         text-align: center;
    
     }
     i {
         top: 20px;
         position: absolute;
         font-size: 30px;
         color:#103013
     }
</style>