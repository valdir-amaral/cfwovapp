import { writable } from 'svelte/store'
export const user = writable({
    name: '',
    pass: '',
    id: ''
})