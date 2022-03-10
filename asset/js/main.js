let mainContainer = document.getElementById("main-container");

let kmQuery = prompt("Benvenuto sul sito, inserisca quanti kilometri deve percorrere:");
let ageQuery = prompt("Inserisca la sua età in anni:");

//con prompt ottengo delle string, le trasformo in number: (in questo caso Number() è meglio di parseInt())
kmQuery = Number(kmQuery);
ageQuery = Number(ageQuery);

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

//risultato finale
if (isNaN(kmQuery) || isNaN(ageQuery)) {
    mainContainer.innerHTML = `<p>ERRORE, ricaricare la pagina e inserire correttamente i dati</p>`
} else {
    mainContainer.innerHTML = `<p>Prezzo biglietto: ${totPriceRounded} &euro;</p>`
}



//METHOD WITH FUNCTION()

// let mainContainer = document.getElementById("main-container");

// let kmQuery = prompt("Benvenuto sul sito, inserisca quanti kilometri deve percorrere:");
// let ageQuery = prompt("Inserisca la sua età in anni:");

// let totPriceRounded;
// let totPrice

// kmQuery = parseInt(kmQuery);
// ageQuery = parseInt(ageQuery);

// function price() {
//     totPrice = kmQuery * 0.21;
//     if (ageQuery < 18) {
//         totPrice -= (totPrice * 0.2);
//     } else if (ageQuery > 64) {
//         totPrice -= (totPrice * 0.4);
//     } else {
//         totPrice = totPrice
//     }
//     totPriceRounded = Math.round((totPrice + Number.EPSILON) * 100) / 100;
//     return totPriceRounded;
// }

// if (isNaN(kmQuery) || isNaN(ageQuery)) {
//     mainContainer.innerHTML = `<p>ERRORE, ricaricare la pagina e inserire correttamente i dati</p>`
// } else {
//     mainContainer.innerHTML = `<p>Prezzo biglietto: ${price()} &euro;</p>`
// }


