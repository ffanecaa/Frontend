
async function traerDatos(){
   const resposta = fetch(`http://localhost:8000/pax/?page=${page}&limit=${limit}`)
        const datos = (await resposta).json()
        return datos
    }


    export{
        traerDatos
    }