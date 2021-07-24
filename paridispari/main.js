// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.


var num1 = parseInt(prompt("inserisci numero"));
var num2 = parseInt(prompt("inserisci numero"));

function randomNumbers(num1,num2) {
    return Math.floor(Math.random() * (num2 - num1));    
}
console.log(randomNumbers(1,5));


function sommaNumeri(num1,num2) {
    var risultato = num1 + num2;
    return risultato;
}

var somma = sommaNumeri

function isEven(somma) {
    return somma % 2 == 0;
 }
 
 function isOdd(somma) {
    return Math.abs(somma % 2) == 1;
}

if (isEven == 0) {
    alert("Even win")
}

else if (isOdd == 1) {
    alert("Odd win")
}