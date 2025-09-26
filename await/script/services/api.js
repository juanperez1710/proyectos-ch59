const URL_BASE ="https://fakestoreapi.com/products";


/**
 * ! Todas las funciones asíncronas retornan una promesa
 */
//function declaration tipo async, petición tipo get
export async function getAllProducts(){
    try{
        //se hace la petición al servidor
        const response=await fetch(URL_BASE);
        //convertir la petición a tipo .json, importante no omitir el await porque si no, solo muestra la promesa pero no la data
        const data= await response.json();
        localStorage.setItem("products",JSON.stringify(data))
        return data;
        console.log(data)
    } catch(error){
        console.log(error)
    }
}
//getAllProducts();

//function expression, petición get para un solo producto
export const getSingleProduct=  async function(id) {
    const response=await fetch(`${URL_BASE}/${id}`);
    const data=await response.json();
    console.log(data)
}
//getSingleProduct(5);
//getSingleProduct(12);

// arrow function petición del tipo post 
export const addProduct=async (objectProduct) => {
    try{
    const response= await fetch(URL_BASE,{
        method:"POST",
        body: JSON.stringify(objectProduct),
    })
    const data=await response.json();
    console.log(data);
    return data;
    } catch(error){
        console.log(error)
    }
}
const product={
title: "Monitor Xiaomi",
price: 2500,
description: "Monitor Xiaomi de 27 ips",
category: "monitor",
image: "http://example.com"
}
//addProduct(product);

//
export const updateProduct= async (id, objectProduct)=>{
    const response= await fetch(`${URL_BASE}/${id}`,{
        method:"PUT",
        headers:{'Content-Type':'application/jason'},
        body:JSON.stringify(objectProduct)
    });

    const data=await response.json();
    console.log(data)
}

const productUpdate={
title: "Actualice el producto",
price: 2500,
}
//updateProduct(3, productUpdate);

export const deleteProduct=  async function(id) {
    const response=await fetch(`${URL_BASE}/${id}`,{
        method:"DELETE"});
    console.log(response);
}
