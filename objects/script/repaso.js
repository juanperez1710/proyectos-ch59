const tienda={
    stock: 20,
    getStock: function(){
        return this.stock;
    }
}
console.log(tienda.getStock);
console.log(tienda.getStock());

//Funcion constructora, tiene que empezar con mayúscula
function Gato(name,color){
    this.name=name;
    this.color=color;
    //lo anterior es para convertir los parámetros en propiedades
}
//crear objetos a partir de la funcion constructora
const gatoDeMar = new Gato("Juli", "Blanco y gris");
console.log(gatoDeMar);
//Notación de punto para ver solo una propiedad
console.log(gatoDeMar.color);
// notación de corchetes:
console.log(gatoDeMar["color"]);
//destructuring
const {color, name}=gatoDeMar;
//lo de arriba sería igual a esto: 
const color2=gatoDeMar.color;
const name2=gatoDeMar.name;
console.log(color);
console.log(name);
console.log(color2);
console.log(name2);