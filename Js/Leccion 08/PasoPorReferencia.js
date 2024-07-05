
//Aca si se modifica el valor ya que es un objeto 
//En el paso por referencia
const persona={
    nombre:"Juan",
    apellido:"Perez",
}

function pasoPorReferencia(p1){
    p1.nombre="Sandro";
    p1.apellido="Lara";
}

pasoPorReferencia(persona);
console.log(persona);