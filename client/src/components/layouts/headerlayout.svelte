<script>
    import { Route } from 'svelte-router-spa'
    import Header from '../Header.svelte';
    export let currentRoute
    const params = {}
  </script>
  
  <div class="app">
    <section class="section">
      <Route {currentRoute}  {params} />
    </section>
  </div>

  <style>
    .app {
        width: 100vw;
        min-height: 100vh;

        background-color: #f3f3f3;
        color: rgb(0, 0, 0);
    }
    .section {
      background-color: #f3f3f3;
    }
  </style>
