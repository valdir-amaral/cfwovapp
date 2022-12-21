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
        background-color: #f3f3f3;
        color: rgb(38, 61, 38);
    }
    .section {
      background-color: #f3f3f3;
    }
  </style>
