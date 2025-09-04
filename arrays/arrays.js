//inicializar array
const animales=["Capibara","Tortuga","Cuervo"];
console.log(animales);
console.log(animales[2]);
animales[2]="gatos";
console.log(animales);
animales[3]="perros";
console.log(animales);
// Métodos para agregar valores: 
//Método push: agrega valores al final del array
animales.push("pericos");
console.log(animales);
//método unshift: agrega valores al inicio
animales.unshift("panda");
console.log(animales);
//eliminar valores del array
// el contrario de push es: pop, elimina y retorna el último elemento del array
console.log(animales.pop());
console.log(animales);
//shift: elimina y retorna el primer elemento:
console.log(animales.shift());
console.log(animales);
// todos estos métodos mutan el array original
//Métodos que hacen un nuevo array
const edades=[27,28,31,32,26,28,27,28,22,23];
//Métodos que no mutan el array
//método map
//ejecuta una operación en todos los elementos del array y devuelve un array nuevo ocn el 
//resutado de dichas operaciones
const edadesPorDos=edades.map((edad,index,array)=>{
    //console.log({edad});
    //console.log({index});
    return edad*2;
})
console.log(edadesPorDos);
/*
Método filter: evalua una condición y los valores del array que sean verdaderos son guardados en un array nuevo que retorna

*/
const edadesSin28=edades.filter((edad=> edad !== 28));
console.log("Filter");
console.log(edadesSin28);
edadesSin28.splice(2,0,28);
console.log(edadesSin28);
console.log(edadesSin28.splice(3,2));
console.log(edadesSin28)
/*
Slice: Método que nos permite formar subarrays, podemos indicar el inicio
con base en indices, si ingresamos un indice negativo, comenzará a contar desde el final del array
podmeos indicar el final del array con indices, si no lo ingresamos elimina todo el array
Retorna un array nuevo con los elementos tomados en las posiciones indicadas
*/
console.log(edadesPorDos);
const edadesNew=edadesPorDos.slice(2,6);
const edadesSinFin=edadesPorDos.slice(3);
console.log(edadesNew);
console.log(edadesSinFin);