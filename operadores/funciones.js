/*
¿Qué es una función? 
Es un bloque de código que debe ejecutar una acción
este bloque está encerrado y se puede invocar las veces necesarias
su objetivo es modularizar el código
DRY=Dont repeat yourself (si algo se repite, quizá lo puedas volver una función)
function nombredelafunción(parámetros){todo lo que querramos que haga la variable}
los parámetros van dentro de los paréntesis
son variables a los cuales se les va a asignar valor cuando 
la función es llamada

La primera forma pasa por un proceso llamado hoisting, el cual las prioriza en la ejecución del código, es  decir se puede utilizar
y luego declararse la función 

la segunda forma no tiene hoisting 

la tercera forma o expresión lambda tiene la particularidad de que si su retorno es en una sola línea no requiere que se escriba
explicitamente el return, es decir, se puede poner: 
const martes=()=>"Feliz martes" 
en lugar de: 
const martes=()=>{
   console.log("Feliz martes")
}
martes();
}
martes();


*/

function saludar(nombre){
    return(`Hola ${nombre}, bienvenido`);
}

saludar("Juan")
//console.log(saludar("Juan"))

// segunda forma de declarar funciones
// function expression o anónima
// variable+nombredefuncion=function(parámetros){contenido}
const addTwoNumbers=function(a,b){
    return a+b;
}

const suma1= addTwoNumbers(10,15);
//console.log(suma1);
//console.log(addTwoNumbers(20,32));

//forma tres
// arrow function
const martes=()=>{
   return "Feliz martes"
}
martes();

const nameMayus = (name) => {
    const mayus=name.toUpperCase();
    return `Tu nombre fue puesto en mayúsculas ${mayus}`;
}
//console.log(nameMayus("josué"));

const option=+prompt("Selecciona una opción\n 1. Saludar\n 2. Sumar\n 3. Feliz\n 4. Convertir a mayúsculas");
switch (option) {
    case 1:
        const nombre=prompt("Ingresa tu nombre");
        saludar(nombre);
        console.log(saludar(nombre))
        break;
    case 2:
        const num1=+prompt("ingresa un número");
        const num2=+prompt("ingresa otro número");
        alert(addTwoNumbers(num1,num2))
        break;
    case 3: 
        alert(martes());
        break
    case 4: 
        const name=prompt("Ingresa tu nombre");
        alert (nameMayus(name));
    default:
        break;
}