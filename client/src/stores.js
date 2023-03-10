import PocketBase from 'pocketbase'
import { writable, readable } from 'svelte/store'

export const user = writable({
    name: '',
    pass: '',
    id: ''
})


function createPbStore(baseUrl, authStore, lang) {
    const store = writable();

    function set(baseUrl, authStore, lang) {
        const pb = new PocketBase('http://localhost:8090', authStore, lang);
        if ((document.cookie||"").length) pb.authStore.loadFromCookie(document.cookie)
        store.set(pb);
    }
    set('http://localhost:8090', authStore, lang);
    
    return {
        subscribe: store.subscribe,
        set
    }
}
export const pbStore = createPbStore();