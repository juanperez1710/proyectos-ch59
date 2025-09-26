import { getAllProducts } from "./services/api.js";

//seleccionamos el contenedor donde queremos nuestras tarjetas
const mainEl=document.querySelector(".container-j");
//creamos una función asincrona para mostrar la información de la promesa

window.addEventListener("load",async()=>{
    try{
    const productsArray=JSON.parse(localStorage.getItem("products"));
    if(productsArray===null){
    const products=await getAllProducts;
    renderAllProducts(products); 
    }else{
        renderAllProducts(productsArray);
    }
}catch(error){
    console.log(error);
}
})

const renderAllProducts=async(productsArray)=>{
    const products=await getAllProducts();
    console.log(products);
    
        productsArray.map((product)=>{
        const cardProduct=`
        <div class="card" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                 </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Category: ${product.category}</li>
                <li class="list-group-item">Price:$ ${product.price}</li>
            </ul>
            
        </div>
            `;
        mainEl.insertAdjacentHTML("afterbegin",cardProduct)
        });

}
