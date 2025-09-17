class Character {
    name;
    power;
    level;
    xp;
    //método constructor
    constructor(name,power, level,xp){
        this.name=name; //this apuntará a las propiedades de la clase
        this.power=power;
        this.level=level;
        this.xp=xp;
    }
    //métodos: para declarar funciones no es necesaria la palabra function
    damage(){
        return `De acuerso a su poder ${this.name} puede hacer ${this.power*0.15} de daño`;
    }
    raiseXp(){
        this.xp += 10;
        return this.raiseLevel();
    }
    raiseLevel(){
        if (this.xp>=100){
            this.level++;//aumenta un nivel
            this.xp -=100; //quita 100 de xp para reiniciar la xp
            return `${this.name} ha alcanzado 100 pts de experiencia y subió un nivel, ahora es nivel ${this.level}`;
        } else {
            return `${this.name} tiene ${this.xp} de xp y aún no es suficiente para subir de nivel`;
        }
    }
}
//creando objetos (siempre fuera de la clase)
const batman=new Character("Batman",1000,5,160);
const flash=new Character("Flash",1200,4,180);
console.log(batman)
console.log(flash)
//probando métodos
for(let i=0; i<8; i++){
    console.log(batman.raiseLevel());
}
