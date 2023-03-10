import { pbStore } from './stores'
import MenuIndex from './pages/MenuIndex.svelte'
import greenlayout from './components/layouts/greenlayout.svelte'
import Ranking from './pages/Ranking.svelte'
import headerlayout from './components/layouts/headerlayout.svelte'
import Missions from './pages/Missions.svelte'
import Login from './pages/Login.svelte'

function userIsLogged() {
    console.log(pbStore.authStore.isValid)
    return pbStore.authStore.isValid
}
  
  const routes = [
    {
        name: '/',
        onlyIf: { user: !userIsLogged, redirect: '/inicio'},
        component: Login,
        layout: greenlayout,
    },
    {
      name: '/inicio',
      component: MenuIndex,
      layout: greenlayout
    },
    {
        name: '/ranking',
        component: Ranking,
        layout: headerlayout
    },
    {
      name: '/missions',
      onlyIf: { guard: userIsLogged, redirect: '/'},
      component: Missions,
      layout: headerlayout
    }
  ]
  
  export { routes }