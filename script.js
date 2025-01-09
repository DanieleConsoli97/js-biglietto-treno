const prezzoKM = 0.21;
let prezzoFinaleBiglietto;
let kmDaPercorrere;
let etaPasseggero;

kmDaPercorrere = window.prompt("Quanti km devi percorrere?");
etaPasseggero = window.prompt("Quanti anni hai?");
if (etaPasseggero < 18) {
  prezzoFinaleBiglietto = prezzoKM * kmDaPercorrere * 0.2;
} else if (etaPasseggero > 65) {
  prezzoFinaleBiglietto = prezzoKM * kmDaPercorrere * 0.4;
} else {
  prezzoFinaleBiglietto = prezzoKM * kmDaPercorrere;
}
