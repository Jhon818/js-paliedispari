// Chiedere all’utente di inserire una parola
var word = prompt("Inserisci parola");
console.log(word);
// Creare una funzione per capire se la parola inserita è palindroma
function palindrome(s) {
    return s == s.split("").reverse().join("");
}
alert(palindrome(word)); 


