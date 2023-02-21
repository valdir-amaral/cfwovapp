import MenuIndex from './pages/MenuIndex.svelte'
import greenlayout from './components/layouts/greenlayout.svelte'
import Ranking from './pages/Ranking.svelte'
import headerlayout from './components/layouts/headerlayout.svelte'
import Missions from './pages/Missions.svelte'
function userIsAdmin() {
    //check if user is admin and returns true or false
  }
  
  const routes = [
    {
        name: '/',
        component: MenuIndex,
        layout: greenlayout,
    },
    {
        name: '/ranking',
        component: Ranking,
        layout: headerlayout
    },
    {
      name: '/missions',
      component: Missions,
      layout: headerlayout
    }
  ]
  
  export { routes }