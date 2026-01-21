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

// je déclare une fonction qui retourne la date actuelle
function dateActuelle() {
    let date = new Date();
    let jour = date.getDate();
    let mois = date.getMonth() + 1;
    let annee = date.getFullYear();

    console.log("Date actuelle : " + jour + "/" + mois + "/" + annee); 

    return jour + "/" + mois + "/" + annee;
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
    monHeure,
    dateActuelle
};