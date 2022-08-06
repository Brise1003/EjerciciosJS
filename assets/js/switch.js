// Switch

// Obtener la fecha actual

//var dia = new Date().getFullYear();
//alert(dia);
let dia=5;
switch(dia){
    case 0:
        alert("Sunday")
        break;
    case 1:
        alert("Monday");
        break;
    case 2:
         alert ("Tuesday");
         break;
    case 3:
        alert ("Wednesday");
        break;
    case 4:
        alert ("Thursday");
        break;
    case 5:
        alert ("Friday");
        break;
    case 6:
        alert ("Saturday");
        break;

    default:
        alert("Not a valid day.")
        break;
}