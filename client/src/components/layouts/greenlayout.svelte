<script>
    import { Route } from 'svelte-router-spa'
    export let currentRoute
    const params = {}
  </script>
  
  <div class="app">
    <section class="section">
      <Route {currentRoute}  {params} />
    </section>
  </div>

  <style>
    :global(body) {
        width: 100vw;
        height: 100vh;
        background-color: rgb(29, 82, 19);
    }
  </style>

