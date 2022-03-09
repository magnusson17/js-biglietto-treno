let kmQuery = prompt("Benvenuto sul sito, inserisca quanti kilometri deve percorrere:");
let ageQuery = prompt("Inserisca la sua età in anni:");

//con prompt ottengo delle string, le trasformo in number:
kmQuery = parseInt(kmQuery);
ageQuery = parseInt(ageQuery);

//il prezzo è di 0,21 euro X km
let totPrice = kmQuery * 0.21;

//sconto 20% per minorenni e 40% per over 65
if (ageQuery < 18) {
    totPrice -= (totPrice * 0.2);
} else if (ageQuery > 64) {
    totPrice -= (totPrice * 0.4);
} else {
    totPrice = totPrice
}

//arrotondo totPrice a 2 cifre decimali
totPriceRounded = Math.round((totPrice + Number.EPSILON) * 100) / 100;

let mainContainer = document.getElementById("main-container");
mainContainer.innerHTML = `<h3>sono ${totPriceRounded} euro</h3>`


