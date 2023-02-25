<script lang="ts">
    export let text = ''
</script>

<h1 class="main-title">{text}</h1>

<style>

.main-title {
    height: 36px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 29.6px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.03em;
    color: #F6F6F6;
    margin: 20vh auto 15px auto;
    }

@media screen and (max-height: 644px){
    .main-title {
        margin-top: 60px;
    }
}

</style>