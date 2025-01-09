const prezzoKM = 0.21;
let prezzoFinaleBiglietto;
let kmDaPercorrere;
let etaPasseggero;
kmDaPercorrere = window.prompt("Quanti km devi percorrere?");
etaPasseggero = window.prompt("Quanti anni hai?");
if (etaPasseggero < 18) {
  prezzoFinaleBiglietto = (prezzoKM * kmDaPercorrere)-((prezzoKM * kmDaPercorrere) * 20/100);
} else if (etaPasseggero > 65) {
  prezzoFinaleBiglietto = (prezzoKM * kmDaPercorrere)-((prezzoKM * kmDaPercorrere) * 40/100);
} else {
  prezzoFinaleBiglietto = prezzoKM * kmDaPercorrere;
}
alert("Il prezzo del biglietto è di " + prezzoFinaleBiglietto.toFixed(2) + "€");






// const prezzoKM = 0.21;
// let prezzoFinaleBiglietto;
// let kmDaPercorrere;
// let etaPasseggero;
// kmDaPercorrere = window.prompt("Quanti km devi percorrere?");
// etaPasseggero = window.prompt("Quanti anni hai?");
// let prezzo = prezzoKM * kmDaPercorrere;
// if (etaPasseggero < 18) {
//   prezzoFinaleBiglietto = (prezzo)-(prezzo) * 20/100);
// } else if (etaPasseggero > 65) {
//   prezzoFinaleBiglietto = (prezzoKM * kmDaPercorrere)-((prezzoKM * kmDaPercorrere) * 40/100);
// } else {
//   prezzoFinaleBiglietto = prezzoKM * kmDaPercorrere;
// }
// alert("Il prezzo del biglietto è di " + prezzoFinaleBiglietto.toFixed(2) + "€");
