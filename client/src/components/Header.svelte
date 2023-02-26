<script>
    import { navigateTo } from "svelte-router-spa";
    export let titulo;

    function navegar(nav) {
        navigateTo(nav)
    }
</script>

<header>
    <div class="header-content">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p class="return-btn" on:click={() => navegar('/inicio')}><i class="fa-solid fa-arrow-left"></i> &nbsp;</p>
        <p id="title-stock">{titulo}</p>
    </div>
</header>

<style>

    header {
        height: 136px;
        color: black;
        background-color: #F6F6F6;
        border-bottom: 1px solid #c0bccf;
        display: flex;
        align-items: center;
    }
    .header-content {
        display: flex;
    align-items: center;
    margin-left: 20px;
    }
    .return-btn {
        cursor: pointer;
        font-size: 20px;
    }
  </style>