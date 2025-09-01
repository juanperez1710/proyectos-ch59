// strings son cadenas de textos, en js podemos declarar strings
//con cualquier tipo de comilla
//const reverseString=(str)=>{
    //let cadenaFinal="";
    //for (let i=str.length -1 ;i>=0; i--){
      //cadenaFinal+=str[i];
       //console.log(cadenaFinal);
    //}
    //return cadenaFinal;
//}
//reverseString("Mundo");
//const cadena1="Anita lava la tina";
//const cadenaFinal=reverseString(cadena1);
//console.log(cadenaFinal);
//let animal="wombat";
//let miNombre="Juan Pérez";
//let message=`Soy ${miNombre} y mi animal favorito es el ${animal}`;
//console.log(animal.length);
//console.log(miNombre.length);
//console.log(message);
//console.log(message.length);
//console.log("Accediendo a caracteres");
//console.log(message[message.length-1]);
//console.log(message[3]);
//console.log(message[5]);
//console.log(message[10]);
//console.log(message.at(-5));
//console.log(message.charAt(24));
//probando IndexOf
//console.log("la letra w se encuentra en el índice : " + message.indexOf("w"));
//obteniendo el índice de la letra m sin posición
//console.log(message.indexOf("m"));
//onteniendo  el índice de la letra m con posición inicial
//console.log(message.indexOf("m",18));
//Usando maypusculas
//console.log(miNombre.toUpperCase());
//console.log(miNombre.toLowerCase());
//let color="    morado   ";
//console.log(color);
//quitar espacios
//console.log(color.trim());
//console.log(color.trimStart());
//console.log(color.trimEnd());
//Reemplazar
//let frase="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
//let fraseSinEspacios=frase.replaceAll("m","4");
//console.log(fraseSinEspacios);
const reverseString=(str)=>{
    let cadenaFinal="";
    for (let i=str.length -1 ;i>=0; i--){
      cadenaFinal+=str[i];
       //console.log(cadenaFinal);
    }
    return cadenaFinal;
}
const checkPalindromo=(str)=> {
    let palindromominusculas=str.toLowerCase();
    //console.log(palindromominusculas);
    let palindromoTrimeado=palindromominusculas.replaceAll(" ","");
    //console.log(palindromoTrimeado);
    //let palindromoVolteado=palindromoTrimeado.split('').reverse().join('');
    //console.log(palindromoVolteado)
   console.log(palindromoTrimeado===reverseString(palindromoTrimeado));
    //console.log(palindromoTrimeado===palindromoVolteado)
}
   // if ((palindromoInvertido)===palindromoLimpio){
   //     console.log(true);
   // }
   // else {console.log(false)}

checkPalindromo("No traces en ese Carton");