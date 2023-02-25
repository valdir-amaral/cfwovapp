<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let text = '';

    const dispatch = createEventDispatcher();

    function onClick(event){
        dispatch('click', event);
    }


</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<a href="#" on:click={onClick}>
    <button type="submit" class="btn-1">
        {text}
    </button>
</a>

<style>
    .btn-1 {
        background-color: transparent;
        border: 3px solid #F6F6F6;
        color: #F6F6F6;
        font-weight: 600;
        font-size: 16px;
        width: 100%;
        height: 60px;
        margin: 7px auto;
        cursor: pointer;
        border-radius: 6px;
    }
    .btn-1:hover {
        background-color: #F6F6F6;
        color: rgb(29, 82, 19);
    }
</style>