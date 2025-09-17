function Character(name,level,power,xp){
    this.name=name;
    this.level=level;
    this.power=power;
    this.xp=xp;
}

const spiderman=new Character("Spiderman",1,100,0);
const superman=new Character("Superman",5,500,0);
console.log(spiderman);
console.log(superman);

//generar un nuevo método para el objeto generador 
Character.prototype.damage= function(){
    return `De acuerdo a su poder de ${this.power} el personaje ${this.name} puede hacer ${this.power*.15} de daño`;
}
console.log(spiderman.damage());
console.log(superman.damage());
/*
1.-Agregar una propiedad más (Experiencia o xp)
2.- crear un método que aumente en 10 la xp del personaje
3.- crear otro método que si la experiencia del personaje es >=100, el personaje sube un nivel
*/
Character.prototype.ganarXp=function(){
    /*if (this.xp===0){
        return 10;
    } else {
        return this.xp+10;
    }*/
   this.xp = this.xp+10; //para que aumente de 10 en 10
    console.log(`${this.name} ganó 10 de xp, Su xp actual es de: ${this.xp+10}`)
}
Character.prototype.subirDeNivel = function() {
  if (this.xp % 100===0) { //condicionamos que suba de nivel cada 100 puntos (múltiplos de 100)
    this.level = this.level+1; //indicamos que suba un nivel 
    console.log(`${this.name} subió de nivel, nuevo nivel: ${this.level}`);
  } else {
    console.log(`${this.name} no puede subir de nivel`);
  }
};


console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.ganarXp())
console.log(spiderman.subirDeNivel())
console.log(spiderman.ganarXp())
console.log(spiderman.subirDeNivel())
//

String.prototype.getInitials=function(){
    // en este caso this apunta a la cadena donde sea usado el método
    const cadenaArr=this.split(" ");
   // console.log(cadenaArr);
    const initialsArr=cadenaArr.map(cadena => cadena[0]);
   // console.log(initialsArr);
    return initialsArr.join(".").toUpperCase();
}
console.log("Juan Pérez Marcelo".getInitials());
