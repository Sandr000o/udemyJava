let x=10;

console.log(x.length);

let persona ={
    nombre:'Juan',
    apellido:'Perez',
    email:'jperez@gmail.com',
    edad :28,

    nombreCompleto: function(){
        return this.nombre+' '+this.apellido;
    },

    datosCompletos: function(){
        return 'Nombre : '+this.nombre+' Apellido : '+this.apellido+' Email : '+this.email+' Edad :'+this.edad
    }

}

console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)
console.log(persona.nombreCompleto());
console.log(persona.datosCompletos());

//Creacion de objetos en javaScript

let persona2 = new Object();
persona2.nombre='Carlos';
persona2.apellido='Lara';
persona2.direccion='Saturno 15';
persona2.tel='5544332211';

console.log(persona2)

//Acceder a las propiedades de los objetos

console.log(persona2['apellido']);

//for in nos permite reccorer todas las propiedades de nuestro ejemplo

for(propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}

//Agregar y eliminar  propiedades de un objeto

persona2.nuevoValor='Valor de prueba';

console.log(persona2)