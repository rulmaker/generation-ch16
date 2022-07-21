
function saludar (  ){
      console.log("Hola mundo");
} 

//saludar();

//Arreglos

let num = [];
//console.log(num);

let arr1 = new Array();
//console.log(arr1);


//usar un arreglo

const arr = [1,2,3,4,5];
//console.log(arr);
//notación de corchetes  []
//console.log(arr[3]);

arr[5] = 25;
arr[6] = 8;
arr[6] = 0;
arr[6] = 15;

//arr[7] = undefined
//arr[8] = undefined
//arr[9] = undefined

arr[10] = 40;

arr[8] = 9;

//console.log(arr);

//Propiedades de los arreglos
//descripción de nuestro arreglo
//console.log(arr.length);


//Métodos
//acciones que puede realizar arreglo

const frutas = ["Manzana", "Plátano"];
/* console.log(frutas); */

//push()
//agrega un valor al final del arreglo

let fruta = "Toronja";

frutas.push("Naranja");
frutas.push(fruta);


/* console.log(frutas); */


//pop()
//quita un elemento del final del arreglo

let elementoBorrado = frutas.pop();
/* console.log(frutas);
console.log(elementoBorrado); */


//unshift()
//agrega un elemento al inicio del arreglo

let devolver = frutas.unshift("Uva", "Pera");
/* console.log(frutas);
console.log(devolver); */

//shift
//elimina un elemento del inicio de un arreglo

/* frutas.shift();
frutas.shift(); */
let frutaQuitada1 = frutas.shift();
let frutaQuitada = frutas.shift();
/* console.log(frutas);
console.log(frutaQuitada1);
console.log(frutaQuitada); */




//crea un archivo llamado ejercicio1.js
//cada comando debe mostrarse en consola

const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Escribe un comando para remover a "Dani" del arreglo

//personas.splice(1, 1, "Beto"); //personas[1] = "Beto"
personas.splice(1, 1);
/* console.log(personas); */

//Escribe un comando para remover a "Juan del arreglo"

personas.splice(2, 1);
/* console.log(personas); */

//Escribe un comando para agregar a "Luis" al inicio del arreglo
//let persona = personas.splice(1,1);
//console.log(persona[0]);

personas.splice(1,1);

personas.unshift("Luis");

//personas.unshift(personas.splice(1,1)[0]);
/* console.log(personas); */

//Escribe el comando para agregar tu nombre al final del arreglo

personas.push("Raul");
/* console.log(personas); */

//Escribe el comando para mostrar la posición de "Maria"
// personas.push("Maria");
// console.log(personas);

/* console.log(personas.indexOf("Maria")); */

//Escribe el comando para mostrar la posición de tu nombre

/* console.log(personas.indexOf("Raul")); */

//arreglo multidimensional
const newArr = [1, 45, "Hola", "Adiós", true, null, [ 30, 31, 32 ], [ "Azul", "Amarillo", "Verde" ], {}];

/* console.log(newArr);
console.log(newArr[6][1]);
console.log(newArr[5]); */



//Objetos
//estructura especial llamada objeto
//nos permiten guardar pares de valores
// key  -  value
//llave - valor

const obj = { 
      nombre : "Pedro",
      edad : 25,
      color : "Azul",
      hobbies : [ "Leer", "Correr" ],
      newArr : newArr
};

console.log(obj.edad);
console.log(obj.hobbies[0]);

