
import { writable } from "svelte/store"
import { getElements, getCathegory,getIcon} from "./fetchs.mjs"



function elementClassifier() {
  const clasificados = {}
  const iconos = {}
  Promise.all( [getElements(), getCathegory(),getIcon()] ).then(
    ( [ elementos, categorias ,iconos] ) => { 

      for ( let categoria of categorias) {
        clasificados[categoria.name] = elementos.filter(element => element.icon === categoria.name)
      }
      store.set(clasificados)

      for (let icono of iconos){
        if (icono.id in clasificados) iconos[icono.id.replaceAll("-", " ")] = icono.file
      }
      storeIconos.set(iconos)
    
    }
  )
}





export const store = writable({}); // pq exporto un objeto
export const storeIconos = writable({}); // pq exporto un objeto

elementClassifier();