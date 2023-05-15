
import { writable } from "svelte/store"
import { getElements, getCathegory} from "./fetchs.mjs"



function elementClassifier() {
  const clasificados = {}
  Promise.all( [getElements(), getCathegory()] ).then(
    ( [ elementos, categorias ] ) => { 
      for ( let categoria of categorias) {
        clasificados[categoria.name] = elementos.filter(element => element.icon === categoria.name)
      }
      store.set(clasificados)
    }
  )
}





export const store = writable({}); // pq exporto un objeto

elementClassifier();