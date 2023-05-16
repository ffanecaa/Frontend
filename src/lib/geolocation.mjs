function obterLocalizacion() {
    new Promise(
        (resolve, rexeita)=>{
            navigator.geolocation.getCurrentPosition(
                (location) => {
                    resolve({lat: location.coords.latitude, lng: location.coords.longitude})
                },
                (error) => {
                    rexeita(error)
                }
            )
        }
    )
}

export {
    obterLocalizacion
}
