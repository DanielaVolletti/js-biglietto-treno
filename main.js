
// var prezzo Biglietto
var prezzoFinale;

// chiedere a utente numero di km da percorrere
var km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));

// chiedere età del passeggero
var eta = parseInt(prompt("Quanti anni hai?"));

// var prezzo Biglietto
var costoBiglietto = parseFloat(km * 0.21);

console.log("costo biglietto :" + costoBiglietto);

// sconto 20% minorenni e 40% età superiore ai 66 anni
if (eta <= 17) {
  prezzoFinale = costoBiglietto - ((costoBiglietto * 20) / 100);
} else if (eta >= 66) {
  prezzoFinale = costoBiglietto - ((costoBiglietto * 40) / 100);
} else {
  prezzoFinale = costoBiglietto;
}

console.log("prezzo finale:" + prezzoFinale);

// messaggio finale
var msg = "Il prezzo del tuo biglietto è di: " + prezzoFinale + " euro.";

// prezzo totale viaggio
document.getElementById('prezzo-biglietto').innerHTML = msg;
