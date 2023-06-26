
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


// funcion ficha elementos busqueda por id 
async function traerlink(id) {
    const resposta = await fetch(baseURL + `/link/${id}`);
    const datos = await resposta.json();
    return datos;
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
// ------------- trae varios elementos buscados por nombre a un solo mapa -------------
  async function getElementsBusqueda(name){
    const response = await fetch(baseURL +`/varios/?name=${name}`)
    const data = await response.json()
    return data
}

  //
  async function traerlinkName(name) {
    const resposta = await fetch(`http://localhost:8000/links/${name}`);
    const datos = await resposta.json();
    return datos;
  }



  ///----------------validacions --------------------------------




//   async function obtenerPase(name, password, manexador) {
//     const response = await fetch(baseURL+"sesion/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(
//             {
//                 name,
//                 password
//             }
//         )
//     })
//     manexador( response.ok ? await response.text() : false )
// }

// async function enviarPerfil(objetoPerfil, jwt, manejador) {
//     const respuesta = await fetch(baseURL+"usuarios/perfiles/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             authorization: "Bearer "+jwt
//         },
//         body: JSON.stringify(objetoPerfil)
//     })
//     manejador( respuesta.ok ? await respuesta.json() : false )
// }

// async function recuperarPerfil(jwt, manejador) {
//     const respuesta = await fetch(baseURL+"usuarios/perfiles/",{
//         headers: {
//             authorization: "Bearer "+jwt
//         },
//     })
//     manejador( respuesta.ok ? await respuesta.json() : false )
// }


export {
    getElements,
    getCathegory,
    getIcon,
    traerlink,
    getElementsBusquedaPax,
    traerpaxPosterior,
    traerpaxAnterior,
    traerlinkName,
    getElementsBusqueda,


    // obtenerPase,
    // enviarPerfil,
    // recuperarPerfil
    
}