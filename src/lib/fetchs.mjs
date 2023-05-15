
const baseURL = "http://localhost:8000/"
   

async function getElements(){
    const response = await fetch(baseURL+"elements/")
    const data = await response.json()
    return data
}

async function getCathegory(){
    const response = await fetch(baseURL+"cathegory/")
    const data = await response.json()
    return data
}




export {
    getElements,
    getCathegory

}