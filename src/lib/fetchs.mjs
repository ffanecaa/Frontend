
const baseURL = "http://localhost:8000"
   

async function getElements(){
  
    const response = await fetch(baseURL+"/elements/",{
        headers:{authorizacion:"Bearer "+localStorage.getItem("token")}
    })
    const data = await response.json()
    return data
}

async function getCathegory(){
    const response = await fetch(baseURL+"/cathegory/")
    const data = await response.json()
    return data
}
async function getIcon(){
    const response = await fetch(baseURL+"/icons/")
    const data = await response.json()
    return data
}

async function getElementsBusqueda(name){
    const response = await fetch(baseURL +`/varios/?name=${name}`)
    const data = await response.json()
    return data
}

/// elementos por nombre paginados////////

async function getElementsBusquedaPax(name,page,limit){
    const response = await fetch(baseURL +`/elements/pax/?name=${name}&page=${page}&limit=${limit}`)
    const datos =await response.json()
    return datos
}

//--------------- posterior --------------
async function traerpaxPosterior(nextPage){
    
    const resposta = fetch(baseURL +`${nextPage}`)
        const datos = (await resposta).json()
        return datos
       ;
  }
//--------------- anterior --------------
async function traerpaxAnterior(previousPage){
    
    const resposta = fetch(baseURL +`${previousPage}`)
        const datos = (await resposta).json()
        return datos
       ;
  }
// funcion ficha elementos busqueda por id 
  async function traerlink() {
    const resposta = await fetch(`http://localhost:8000/link/${id}`);
    const datos = await resposta.json();
    return datos;
  }

export {
    getElements,
    getCathegory,
    getIcon,
    getElementsBusqueda,
    getElementsBusquedaPax,
    traerpaxPosterior,
    traerpaxAnterior,
    traerlink
}