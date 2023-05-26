
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




export {
    getElements,
    getCathegory,
    getIcon

}