
import { writable } from "svelte/store"
import { getElements, getCathegory,getIcon} from "./fetchs.mjs"



function elementClassifier() {
  const clasificados = {}
  Promise.all( [getElements(), getCathegory(),getIcon()] ).then(
    ( [ elementos, categorias ,iconos] ) => { 
      for ( let categoria of categorias) {
        
        for (let icono of iconos){
          if (icono.name === categoria.name)
          clasificados[icono.file] = [categoria.name] = elementos.filter(element => element.icon === categoria.name)
        }
      }
      store.set(clasificados)
    }
  )
}





export const store = writable({}); // pq exporto un objeto

elementClassifier();