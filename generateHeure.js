/**
 * generateHeure est un module de calcul de l'heure automatique
 */

// je déclare une fonction qui retourne l'heure

function monHeure() {
    let date = new Date();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();

    console.log("Heure actuelle : " + heure + "h" + minute + "min" + seconde + "s");

    return heure + "h" + minute + "min" + seconde + "s";

}

// jaffiche les secondes en dynamique toutes les secondes (1000 millisecondes)
setInterval(() => {
    let date = new Date();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    document.querySelector("#heure").textContent = heure + "h" + minute + "min" + seconde + "s";
}, 1000);

// j'exporte ou expose ma fonction pour qu'elle soit accessible depuis un autre fichier

export default {
    monHeure
};