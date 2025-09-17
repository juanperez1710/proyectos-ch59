

//función constructuora permite crear objetos y asignarle propiedades durante la creación. 
//para crear objetos con base en esta función, usamos la palabra reservada new
function PersonalInformation(name,lasName,favoriteAnimals){
    this.name = name;
    this.lasName=lasName;
    this.favoriteAnimals = favoriteAnimals;
}

const infoJuan = new PersonalInformation("Juan","Pérez",["Peces","Gatos","Conejo"]);
console.log(infoJuan);

//crear funcion constructora 
//1.- la función se debe llamar pedido
//2.-Debe tener las siguientes propiedades: 
//nombre de quien hizo el pedido, producto que fue pedido, fecha, dirección 
//donde va ser enviado el pedido
//3. crear tres objetos diferentes con esta función
function pedido(nombre,producto,fecha,direccion){
    this.nombre=nombre;
    this.producto=producto;
    this.fecha=fecha;
    this.direccion=direccion;
}
const pedidoJuan= new pedido("Juan","Naranjas","12/10/2025","Calle Delicias 25");
console.log(pedidoJuan);
const pedidoEduardo= new pedido("Eduardo","Sandías","12/09/2025","Calle Juárez 23");
console.log(pedidoEduardo);
const pedidoLuis= new pedido("Luis","Mandarinas","15/09/2025","Calle Duraznos 33");
console.log(pedidoLuis);

function Journey(start,end){
    this.start=start;
    this.end=end;
}
const from=process.argv[2];
const to = process.argv[3];


// Type your code above this line!

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")
//2
function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  const subj=process.argv[2];
  const msg=process.argv[3];
  const newMail = new Mail(process.argv[2],process.argv[3] )
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)
