/**
 * ici je vais reunirais tous mes modules de mon projet
 */

//j'importe la fonction monHeure()
import monHeure from "./generateHeure.js";

console.log("Main - mon heure est : " + monHeure.monHeure() + "h" + "min" + "s");

document.querySelector("#heure").textContent = monHeure.monHeure() + "h" + "min" + "s";

// j'importe l'objet user
import user from "./user.js";

console.log("Main - utilisateur : ", user);

document.querySelector("#user").textContent = "Utilisateur : " + user.user.prenom + " " + user.user.nom + ", Email : " + user.user.email + ", Mot de passe : " + user.user.motDePasse;