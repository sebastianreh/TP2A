let persona1 = {
    nombre: 'juan',
    saludo: function() {
        console.log(`Hola, soy ${this.nombre}.`);
    }
}

// En JS las variables de objetos son por refencia
let persona2 = persona1;

//persona2.nombre = 'pablo';

console.log("Saludo persona 2");
persona2.saludo();

console.log("Saludo persona 1");
persona1.saludo();

let array1 = [1,3,5,7,9];
let array2 = array1;

array2[0] = 2;

console.log('array1:', array1);







