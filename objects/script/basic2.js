const personalInformation={
    name: "Juan",
    lastName: "Pérez",
    age: 28,
    aboutMe: function(){
        return `Hola soy ${this.name} ${this.lastName} y tengo ${this.age} años`
    favoriteAnimals : ["pez", "tortuga","conejo"]
}
}
console.log(personalInformation.aboutMe())

//funciones flkecha no tiene lexical this

hello:()=>"hola"+this.name;
console.log(personalInformation.hello)

//showAnimals: function(){
  //  this.favoriteAnimals.map((animal)=> console.log(animal))
//}