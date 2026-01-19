/**
 * ici je vais reunirais tous mes modules de mon projet
 */

//j'importe la fonction monHeure()
import monHeure from "./generateHeure.js";

console.log("Main - mon heure est : " + monHeure.monHeure() + "h" + "min" + "s");

document.querySelector("#heure").textContent = monHeure.monHeure() + "h" + "min" + "s";