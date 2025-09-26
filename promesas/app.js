
console.log("Voy antes de la promesa")

const examplePromise=(miliseconds)=>{
    console.log("Esperando " + miliseconds+" milisegundos");
    /**
     * Para crear promesas deben de ser retornadas dentro de una funcion
     * las promesas se crean con una función de callback que recibe dos parámetros
     * parámetro 1 en caso de éxito 
     * parámetro 2 en caso de fracaso o reject.
     */
    return new Promise((resuelto,rechazado)=>{
        setTimeout(() => {
            const success=true;
            if(success){
                resuelto("La petición fue exitosa");
            }else{
                rechazado("La petición fracasó")
            }
        }, miliseconds);
    })
}
examplePromise(3000)
    .then((res)=>console.log(res))
    .catch((error)=>console.log(error));


console.log("Voy después de la función de la promesa")
console.log("Voy después de la función de la promesa")
console.log("Voy después de la función de la promesa")