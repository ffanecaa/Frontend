
const baseURL = "http://localhost:8000/"
   

async function getElements(){
  
    const response = await fetch(baseURL+"elements/",{
        headers:{authorizacion:"Bearer "+localStorage.getItem("token")}
    })
    const data = await response.json()
    return data
}

async function getCathegory(){
    const response = await fetch(baseURL+"cathegory/")
    const data = await response.json()
    return data
}
async function getIcon(){
    const response = await fetch(baseURL+"icons/")
    const data = await response.json()
    return data
}


// funcion ficha elementos busqueda por id 
async function traerlink(id) {
    const resposta = await fetch(baseURL + `link/${id}`);
    const datos = await resposta.json();
    return datos;
  }

export {
    getElements,
    getCathegory,
    getIcon,
    traerlink,

}