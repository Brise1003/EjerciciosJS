/*
1. Utilizar keyword funtion
2. Nombrar nuestra función
3. Utilizar () y abrir y cerrar la función {}*/

function myFuntion(){
    //  Aquí va el cuerpo de la función
    console.log("Hola Mundo");
}
//invocar una función
myFuntion();

//function myName(){
//     let name="Francisco Briseño";
//     console.log(name);
// }

//myName();

// Variable local

function scopeFunction(){
    let local = "Esto se encuentra dentro de la función";
    console.log(local);
}

// scopeFunction();
// console.log(local);

var nombre ="Francisco Briseño";

function globalScope(){
    console.log(nombre);
}

globalScope();


//Scope de variables

//LET
//Scope global, local
// Hoisting: La variable no existe para nuestro interprete de JS.

//console.log(a);
//let a = "Hoisting let";

//VAR
//Scope global, local
// Hoisting: No se puede utilizar o invocar antes de declararla. Aparece como undefined.

//console.log(x);
//var x="hola";

//Const
//Scope global, local
// Hoisting: La variable no existe para nuestro interprete de JS.

//console.log(b);
//const a = "Hoisting const";

// // Input
// const myName= "Francisco Briseño";
// function fiufiu(x){
//     console.log(x);
// }

// // Parámetro declarado en variable
// fiufiu(myName);
// // Parámetro aleatorio
// fiufiu("Francisco Briseño");
// fiufiu(2);

// // Function con más de 1 parámetro
// function dosParam(x, y){
//     console.log(x+" "+y);
// }

// // Invocación con 2 parámteros aleatorios 
// dosParam("Hola", "Mundo");

//////////////////////////////////////
//        Output

function out(){
    let x= "Hola";
    return x;
}
//   Podemos recibir el dato de forma directa o también 
//podemos guardar el output en una variable y la podemos 
//utilizar después
//console.log(out());

const recieve = out();

// console.log(recieve);
