import { readable,writable } from 'svelte/store';


const clavesStorage = "paseAutorizacion" 
const storage = localStorage

const paseAutorizacion = writable(storage.getItem(clavesStorage) ?? false)
const autorizado = writable(!! storage.getItem(clavesStorage))


paseAutorizacion.subscribe(value => {
    autorizado.set(!!value)
})

//------------ CERRAR SESION----------
function pecharSesion(){
    paseAutorizacion.set(false)
    storage.removeItem(claveStorage)
}

function gardarPaseAutorizacion(pase) {
    paseAutorizacion.set(pase)
    storage.setItem(claveStorage,pase)
}
export {
    autorizado,
    paseAutorizacion,
    pecharSesion,
    gardarPaseAutorizacion,
}
