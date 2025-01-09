const prezzoKM = 0.21;
let prezzoFinaleBiglietto;
const kmDaPercorrere = window.prompt("Quanti km devi percorrere?");
const etaPasseggero = window.prompt("Quanti anni hai?");
let prezzo = prezzoKM * kmDaPercorrere;
if (etaPasseggero < 18) {
  prezzoFinaleBiglietto = prezzo - (prezzo * 20/100);
} else if (etaPasseggero > 65) {
  prezzoFinaleBiglietto = prezzo-(prezzo * 40/100);
} else {
  prezzoFinaleBiglietto = prezzo;
}
alert("Il prezzo del biglietto è di " + prezzoFinaleBiglietto.toFixed(2) + "€");
