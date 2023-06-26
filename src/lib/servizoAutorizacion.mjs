import {  writable } from 'svelte/store';


const clavesStorage = "paseAutorizacion" 
const storage = localStorage

const paseAutorizacion = writable(storage.getItem(clavesStorage) ?? false)
const autorizado = writable(!! storage.getItem(clavesStorage))


paseAutorizacion.subscribe(value => {
    autorizado.set(!!value)
})

export {
    autorizado
}