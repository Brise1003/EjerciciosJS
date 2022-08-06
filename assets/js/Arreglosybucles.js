/*    Arrays and loops

Definición 

Un arreglo o array es un conjunto de datos que se puede 
almacenar en una sola variable.
   Cuando tenemos una variable, la usamos para almacenar un 
solo dato. En cambio, en un arreglo, guardamos muchos datos 
a manera de lista.
    Un array ya no es un tipo de dato primitivo, se 
considera un objeto porque es una estructura de datos */

//   Ejemplo 1
// let nombre ="Francisco"; // Aquí se almacena un solo dato

// array = ["Felipe", "Ivonne", "Briana", "Zabdiel", "Alonso"];
// //    Ejemplo de un array con direntes tipos de datos.
// arrayAnimalitosDelBosque = ["Felipe", 23, true, null, 
// undefined];

/*
--Formas de crear un array--

1.- Primera forma

Utilizando la palabra reservada "new Array"

var marcasColores = new Array("Faber Castell","Blanca Nieves", "Norma", "Mapita", "Prisma Color");

2.- Segunda forma

[]. Esta forma es la más actualizada para crear arreglos en JavaScript.

let marcasDeColores = ["Mapita", "Norma", "Vividel", "Faber Castell", "Blanca Nieves"];

// */
// // Ejemplos de arrays
// listaDePeliculas = ["Jarhead","Angela's Ashes", "The departed", "In Brudges", "Sunshine", "Tokyo Drift"];

// console.log(listaDePeliculas);

// listaDeCarros = ["Mercedes","Volvo", "BMW", 
// "Lamborghini", "Jaguar", "Bugatti"];

// console.log(listaDeCarros);

// equiposDeFutbol = ["America", "Barcelona", "MachesterCity", "PSG", "ACMilan", "Tigres", "Pueblita", "Ajax", "Bayern", "RealMadrid" ];

// console.log(equiposDeFutbol);

// razasGatos = ["Persa", "Siamés", "Esfinge", "Maine Coon", "Bengala", "Himalayo", "Savannah", "Angora", "Azul ruso", "Bombay"];

// console.log(razasGatos);

// estadosDeLARepublicaMexicana = ["Jalisco", "Nayarit", "NuevoLeon", "Coca", "Durango", "Colima", "Queretaro", "QuintanaRoo", "Yucatan"];

// console.log(estadosDeLARepublicaMexicana);

// let tiposTe = ["rojo", "marroqui", "canela", "Hinojo", "Menta", "Manzanilla", "jengibre", "blanco", "azul"];

// console.log(tiposTe);

// //Ejemplo de Arreglo 2
// listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
// console.log(listaDelSuper)

// console.log("El producto en la posicion 1 es : " + listaDelSuper[1]);
// console.log("El producto en la posicion 4 es : " + listaDelSuper[4]);
// console.log("El producto en la posicion 2 es : " + listaDelSuper[2]);
// console.log("El producto en la posicion 6 es : " + listaDelSuper[6]);

//Encontramos que al tratar de seleccionar un elemento de nuestro que no existe, aparecera el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento recibe mas informacion.
/* 

Array asociativo

Son arreglos donde cada elemento esta asociado no solo con su índice, si no que también está asignado a un identificador.

// Sintaxis de un arreglo asociativo*/
// let propiedadesDeMiComputadora = {
//     marca:"Dell", 
//     Procesador:"Intel Core i5",
//     Ram: "16 Gb",
//     Rom: "512 Gb"
// }
// //    Ejemplo de E-commerce
// console.log(propiedadesDeMiComputadora);
// console.log("La RAM de mi computadora es de: ", propiedadesDeMiComputadora["Ram"]);
// //   Ejemplo de red social
// let publicacionRedSocial = {
//     nombre:"Sereno",
//     usuario:"@frankontenis",
//     raza:"Mestizo",
//     fecha:"Viernes",
//     likes: "5000",
//     descripcion:"Esta es una bonita foto de Sereno",
//     ubicacion: "Guadalajara",
// }

// console.log("Estas son las pubicaciones de agosto: ", publicacionRedSocial["fecha"]);

// /* Método de los arrays
// En los arreglos tenemos ciertos metodos o instrucciones que nos van a permitir manipular los elementos de este arreglo, estos nos permiten desde agregar y eliminar elementos hasta reordenarlos.

// La sintaxis básica del método es .nombreDelMetodo(Modificar);

// Podemos dividir estos metodos en 3:

//     - Metodos transformadores
//     - Metodos accesores
//     - Metodos repetitivos (spoiler alert)
// */
// console.log("////////////////////////////////////");
// let arrayDeEjemplo = ["Manzanas", "Peras", "Mangos", "Mandarinas", "Uvas", "Sandia", "Fresas"];

// console.log("Este es nuestro arreglo original de 7 elementos", arrayDeEjemplo);
// //    Metodos transformadores
// //  push(); agrega un elemento al final del arreglo
// arrayDeEjemplo.push("Pitaya");
// console.log("Agregamos nuestra pitaya a nuestro array de ejemplo: ", arrayDeEjemplo);
// //   pop();  elimina el último elemento del arreglo
// arrayDeEjemplo.pop();
// console.log("Eliminamos el último elemento de array: ", arrayDeEjemplo);
// //    unshift(); agrega 1 o más elementos al principio del arreglo
// arrayDeEjemplo.unshift("Bananas","Tunas", "Aguacates","Lychee");
// console.log("Agregamos 4 elementos al principio del array: ", arrayDeEjemplo);
// // array.shift(); Eliminar el primer elemento y devolver ese valor eliminado
// arrayDeEjemplo.shift();
// console.log("Eliminamos el primer elemento del array: ", arrayDeEjemplo);
// //   array.sort(); nos permite ordenar los elementos del arreglo y devuelve el array de forma ascendente
// arrayDeEjemplo.sort();
// console.log("Este es mi array de ejemplo ordenado: ", arrayDeEjemplo);
// // array.reverse(); Invierte el orden de los elementos del array y devuelve el array invertido
// arrayDeEjemplo.reverse();
// console.log("Este es nuestro arreglo invertido", arrayDeEjemplo);
// // slice(); Extraemos una sección del array, y devuelve una cadena nueva, copiando el array (no se modifica nada, sino que se crea una copia)
// let saludo1 = "Hola, estoy aprendiendo arrays en Generation.";
// let saludo2 = saludo1.slice(12,20);
// console.log("Imprimimos la rebanada del array original", saludo2);
// /* array.splice();    Modifica el array en 3 formas distintas
//    Eliminar elementos del array
//    Agregar elementos nuevos en el array
//    Reemplazar elementos que ya existen en el array

//     Sintaxis básica 
//     splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento 1, nuevo elemento 2);

//     - Indice de inicio: la posición desde donde comienza a eliminar elementos (Primer número dentro del parentesis).
//     - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo número del parentesis).
//     - Elemento a agregar: Los nuevos elementos que se agregan al array.
// */

// let mesesDelAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "septiembre"];
// console.log("Este es nuestro array de meses del año: ", mesesDelAño);

// let mesesBorrados = mesesDelAño.splice(2,2,"Abril", "Mayo");
// console.log("Este es el nuevo arreglo con los meses borrados: ", mesesDelAño);
// console.log(mesesBorrados);

// //   Agregar elemento sin borrar nada
// let diasDeLaSemana = ["Lunes", "Martes", "Miercóles"];
// console.log("Los días de la semana son: ", diasDeLaSemana);
// diasDeLaSemana.splice(3,0, "Jueves", "Viernes", "Sabado","Domingo");
// console.log("Los nuevos días de la semana son: ", diasDeLaSemana);

// /*Metodos accesorios*/
// let ensalada = [" jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];
// //Length(); Nos permite saber la longitud del array, número de elementos
// console.log("Tenemos estos elementos en el array: ",ensalada.length);
// //    join(); Nos permite unir los elementos del array con una cadena de texto
// console.log("Esta es una feliensalada: ", ensalada.join("feli"));
// //    concat(); Nos permite unir dos o mas arrays en uno solo. Devuelve un nuevo array con los elementos de los otros arrays.
// let dulce = ["Galletas","Pulparindo", "Chetos", "Glorias", "Gansitos", "Picafresas", "Pulparindo"];
// let mezcla = ensalada.concat(dulce);
// console.log(mezcla);
// //   indexof();
// console.log("El índice de las Picafresas es: ", dulce.indexOf("Picafresas"));
// //   lastIndexOF(); Nos permite saber la ultima posición de un elemento determinado dentro del array
// console.log("La ultima posición de Pulparindo es: ", dulce.lastIndexOf("Pulparindo"));

// /*
// toString
// valueOf
// includes
// */
// //   toString(); Nos permite convertir el array em una cadena de texto
// console.log(mezcla.toString());
// //    valueOf(); Nos permite devolver el valor del array
// let data=[5, 8 , 6 , 7 , 9 , 2 , 8];
// console.log("El índice 4 es: ", data.valueOf("4"));
// //    includes(); Nos permite saber si un elemento existe o no dentro de nuestro array
// console.log("Así podemos saber si un elemento está dentro de nuestro array", mezcla.includes("Gansitos"));
// console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("cacahuates")); //false
// /*    Metodos repetidores de los arrays*/
// //  filter();  Recorre el array y devuelve uno nuevo con los elementos que cumplan la condicion. (Es como un bucle).
// let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Numbers from 1 to 10: ", numbers);
// let numbers1to5 = numbers.filter(numbers=> numbers<5);
// console.log("These are the numbers that comply the statement: ", numbers1to5);
// // Método map(); Recorrer el array, modificar los elementos presentes en él y retornar esos valores modificados en uno nuevo con la misma longitud que el array original.
// let map = numbers.map(numbers => numbers*3);
// console.log("Función map: ",map);
// //   Ejercicio improvisado tablas del 1 al 10
// let baseArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i <11; i++) {
//     let table = baseArray.map(baseArray=>baseArray*i);
//     console.log("Tabla",i,": " ,table);   
// }
// /*

// forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itrea del array. Al igual que otros iteradores como map o el filter, este metodo recibe algunos parametros:

//     - Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteracion
//     - Indice: La posicion que tiene el elemento dentro del arreglo
//     - El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion.

// ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

// */

// //Ejemplo para remover el primer numero impar de un arreglo

// let listaNumeros = [3, 6, 8, 10, 12,];
// let impar = 3;

// var impares = listaNumeros.forEach(function(numero){ //por cada elemento del arreglo, ejecuta la funcion
//     if (numero === impar){
//         listaNumeros.shift();
//     }
// });

// console.log("Estos son los elementos del array que no son impares", listaNumeros);

/*    Bucles
JavaScript los bucles son utilizados para realizar tareas repetitivas con base en una conmdición, las condiciones normalmente devuelven un true o false al ser evaluados, además de que el bucle continuara ejecutandose hasta que la condición sea falsa.

Normalmente tenemos 3 ciclos 
    - while (mientras)
    - doWhile(Hacer mientras)
    - for(Para)

Tenemos otras sentencias más específicas
    - for in: Sirve para recorrer un array y por cada uno de los elementos de este array obtenemos La Posición
    - for of: Sirve para recorrer un arreglo, y por cada uno de los elementos de este array, obtenemos SU VALOR
*/

// Sentencia while(mientras);

//  Nos permite recorrer un bloque de código siempre que se cumpla una condición, hasta que el resultado cambie de True a False
//   La estructura de while() es:

//palabrasReservada while(condición que tiene que ser true){
    //Código a ejecutar
//}

//   Programa para sumar números

let valorInicial = 0;
while (valorInicial<5){
    valorInicial++;
    console.log(valorInicial);
}

let numeroEntPos=prompt("Ingresa un número entero positivo que sea el límite");
let i=1;
console.log("Números impares hasta",numeroEntPos,": ");

while (i<=numeroEntPos){
if(i%2==1){
    console.log(i);
}
i++;
}

// Do while(); 

//El bucle do while nos sirve para ejecutar una sentencia espeificada hasta que la condicion de aprobacion se evalua despues de ejecutar la sentencia especificada, se ejecuta al menos una vez.

//En pocas palabras, con el while preguntamos una vez, evaluamos la condicion y ejecutamos la instruccion. Con el do while, ejecutamos la instruccion al menos una vez, y luego preguntamos la condicion.

/*

palabraReservada do{
    //código a ejecutar
}
while{Condición};*/

//   Ejemplo 1

let numerito = 0;
do{
    console.log("El número es: " + numerito);
    numerito++;
} while(numerito<=10);

/* Sentencia for (para)

    - El valor inicial de la variable que vamos a iterar (i=0)
    - La condición que tiene que cumplirse para que el bucle se siga ejecutando (i<5)
    - La operación que se realiza una vez que termina el bucle (i++)
*/

//   Ejercicio improvisado tablas del 1 al 10
let baseArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <11; i++) {
    let table = baseArray.map(baseArray=>baseArray*i);
    console.log("Tabla",i,": " ,table);   
}