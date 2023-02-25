<script lang="ts">
  
    export let type = 'text';
    export let name = '';
    export let value = '';
    export let label = name;
    export let placeholder = '';
    export let required = false;
    export let icon = '';
    export let showPassword = false;
    export let hasError = false;
    export let error = "";

    let lockIcon;
    $: {
        lockIcon = htmlType == 'text' ? "/images/eye-2.svg" : "/images/eye-1.svg";
    }

    let htmlType = type;
    $: {
        htmlType = showPassword ? "text" : type;
    }

    let input;

    let old_value = undefined;
    function onChange(event){
        if (required && !(input.value && input.value.length)){
            value = old_value;
            hasError = true;
            error = "Field Required!";
            return;
        } 

        hasError = false;
        error = "";
        value = input.value;
    }

    function swapIcon(event){
        if(htmlType == 'text') {
            htmlType = 'password'
        } else {
            htmlType = 'text'
        }
    }

</script>

<div class="field">
    {#if label}<label class="label-login" for="{name}">{label}</label>{/if}
    
    <div class="input-area">
        {#if icon}
        <div class="icon-login">
            <img class="img-icon" src="{icon}" alt="{name}" />
        </div>
        {/if}

        <input bind:this={input} type="{htmlType}" {name} {placeholder} {required} on:change={onChange} />

        {#if !showPassword && type == 'password'}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="button-pass" on:click={swapIcon}>
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="{lockIcon}" />
        </div>
        {/if}

    </div>
    {#if hasError}
    <div class="warn">{error}</div>
    {/if}
</div>

<style>
    label {
        color: #FFFFFF;
        margin-bottom: 3px;
    }
    input {
        width: 100%;
        height: 60px;
        text-indent: 60px;
        margin: 0px;
        border: 0px;
        border-radius: 3px;
    }

    input:focus {
        outline: #ccc;
    }

    .field {
        width: 100%;
        margin-bottom: 10px;
        position: relative;
    }

    .input-area {
        display: inline-flex;
        width: 100%;
        border: 3px solid rgb(67, 107, 73);
        box-shadow: 0px 4px 14px rgba(78, 87, 96, 0.05);
        border-radius: 6px;
    }

    .icon-login {
        background-color: rgba(75, 70, 92, 0.08);
        border-radius: 6px;
        width: 48px;
        height: 44px;
        position: absolute;
        top: 30px;
        left: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button-pass {
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 50px;
        height: 50px;
        position: absolute;
        top: 27px;
        right: 10px;
    }

    .warn {
        display: none;
        font-weight: 600;
        text-decoration: underline;
    }

</style>