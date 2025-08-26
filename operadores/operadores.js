/* 
Operadores aritméticos
*/
//suma
console.log(2+2);
// resta
console.log(10-7);
//Multiplicación
console.log(2*4);
// concatenar ocurre cuando hay un string
console.log("10"+2);
//Coerción de tipo, con la resta js transforma el "10" en 10 para que lo pueda interpretar
console.log ("10"-2);
//Potencia
console.log(2**5);
//División, al dividir entre cero arroja infinito
console.log(10/2);
//permite la divisón con decimales de forma directa
console.log(23.4/2.2);
console.log(16**(1/3))
// Operadores lógicos
console.log(2==2)
console.log(2==3);
console.log("2"==2)
console.log(2===3)

//operador and devuelve true solo si ambos lados son verdaderos
console.log(2===2 && 3===3);
console.log(2===2 && 3===2);
console.log(2===3 && 3===3);

//operador Or ||, devuelve true si al menos una de las condiciones es verdadera
console.log(3===3 || 2===3);
console.log(2===3 || 3===4);

//Operador distinto de != (!== estricto), devuelve true si dos cosas no son iguales
console.log("2"!==2);

//operador not (!)
console.log(!true);

// en javascript todo lo 
// falsy values: 0, "", [], undefined, null