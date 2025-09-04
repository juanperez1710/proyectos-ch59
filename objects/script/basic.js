const personalInformation={
    name: "Juan",
    lastName: "Pérez",
    age: 28,
    aboutMe: function(){
        return "Mi cantante favorito es Ultimo y mi canción favorita es Pianeti"
    },
    favoriteAnimals : ["pez", "tortuga","conejo"]
}
//Notación punto para ver las propiedades del objeto
console.log(personalInformation.lastName);
console.log(personalInformation.name);
console.log(personalInformation.aboutMe());
console.log(personalInformation["age"]);
console.log(personalInformation.favoriteAnimals);
console.log(personalInformation.favoriteAnimals[2]);

/*
destructuring
es una forma dev obtener valores de un objeto o array, asignándolo inmediatamente a una variable.
dentro de las llaves no se pueden poner otras cosas que no sean las propiedades definidas en el objeto del que querramos extraer las variables
*/
//destructuring de objeto, no importa el orden
const {name,age}=personalInformation;
console.log("destructuring "+name);
console.log("destructuring "+age);
const {lastName,favoriteAnimals}=personalInformation;
console.log("destructuring "+lastName);
console.log("destructuring "+favoriteAnimals);

//destructuring en arrays sí importa el orden y la variable no necesariamente se tiene que llamar igual que la propiedad del objeto
const [first,second,third]=favoriteAnimals;
console.log(second,third);

function area(radio){
    return radio*radio*Math.PI
}
console.log(area(10));
//como agregar propiedades o cambiarlas sin tener que volver al objeto
personalInformation.age=35;
console.log(personalInformation.age);

personalInformation.hello= function(){
console.log("Hola");
}
personalInformation.hello();