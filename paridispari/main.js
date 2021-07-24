// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.


var num1 = parseInt(prompt("inserisci numero"));
var num2 = parseInt(prompt("inserisci numero"));

function randomNumbers(num1,num2) {
    return Math.floor(Math.random() * (num2 - num1));    
}
console.log(randomNumbers(1,5));


function sommaNumeri(randomNumbers) {
    var risultato = num1 + num2;
    return risultato;
}


function isEven(risultato) {
    return risultato % 2 == 0;
 }

 
 function isOdd(risultato) {
    return (risultato % 2) == 1;
}



if (isEven %2) {
    alert("Even win");
}

else {
    alert("Odd win");
}