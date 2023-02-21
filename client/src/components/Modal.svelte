<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher()
    export let ativo, tituloModal, corpoModal
    function confirm(event) {
        fecharModal();
        dispatch('confirm');
    }
    function close() {
        fecharModal();
        dispatch('close')
    }
    function fecharModal() {
        ativo = !ativo;
    }
</script>

{#if ativo}
<div id="modal">
    <div class="modal-content">
        <div class="modal-title">
            {tituloModal}
        </div>
        <div class="modal-body">
            <p>{corpoModal}</p>
            <div class="buttons">
                <button on:click={confirm}>Sim!</button>
                <button on:click={close}>Não!</button>
            </div>
        </div>
    </div>
</div>
{/if}


<style>
    #modal {
        background-color: rgba(0, 0, 0, .4);
        transition: 1s;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    
    }
    .modal-content {
        width: 300px;
        height: 450px;
        background-color: #F6F6F6;
        border-radius: 10px;
        transform: translateY(100px);
        animation: modal .5s forwards;
    }
    .buttons {
        display: flex;
        justify-content: space-evenly;
        margin-top: 90px;

    }
    .modal-title {
        text-align: center;
        margin-top: 30px;
    }
    .modal-body {
        width: 250px;
        margin: 100px auto 50px;
    }
    .modal-body p {
        text-align: center;
    }

    @keyframes modal {
        from {
            
        }
        to {
            transform: translateY(-20px);
        }
    }
</style>