// const nineros = false;
// const hambre = true;

// alert(nineros == hambre);  // false

// alert(nineros || hambre); // true


// AND
// Todas las condiciones deben ser true
// true && true  => true
// true  && false => false
// false && false => false


// OR
// Solo una condicion debe ser true
// true || true = true
// true || false = true
// false || false = false

// NOT
// Es la negación a la condición
// true => false, false => true

/*
var hora = 8;

if (hora == 8) {
	console.log("Buen dia");
}

var hora = 3;

if (hora != 8) {
	console.log("Buen dia");
}

var hungry = true;

if (hungry == true){
    alert("Tengo mal del porky");
} else {
    alert("2 mimir");
}

var hora = 12;

// Verificar  24 >= hora > 0

if (hora > 0 && hora <= 24) {
	// Codigo
    
    if (hora < 7) {
    	alert("Buenas madrugadas");
    } else {
    	alert("Que tenga un buen dia");
    }
    
    
} else {
	alert("Su hora no es válida");
}

var dineros = 100;

if(dineros <= 10){
    alert("Concha de vainilla y 4 picafresas");
} else if(dineros <= 50){
    alert("Tacos al vaporwave y una agua de horchata")
} else if(dineros <= 129){
    alert("Pizza liru sisa sin piña combo fiesta");
} else if(dineros <= 500){
    alert("Bonels + aros de cebolla + tarro");
} else{
    alert("Compra 3 casas, renta 2 y vive en 1");
}
*/
let x=6;

if(x%2==0){
  console.log("Número par");
} else if(x%2==1){
    console.log("Número impar");
} else{
    console.log("Número invalido");
}

let userBirthYear=2006;
var currentTime = new Date();
var year = currentTime.getFullYear()
year=year-userBirthYear;
if(year>=18){
    console.log("Positive");
}else{
    console.log("Negative, bai bai");
}

