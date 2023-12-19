//la programmation procédurale suit les mêmes principes généraux que dans d'autres langages de programmation. Voici quelques caractéristiques de la programmation procédurale en JavaScript :

function additionner(a, b) {
    return a + b;
}
var x = 5;
let y = 10;
const pi = 3.14;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

if (x > 0) {
    console.log("x est positif");
} else {
    console.log("x est négatif ou nul");
}
// Programme principal
let resultat = additionner(3, 4);
console.log("Le résultat de l'addition est : " + resultat);

//La programmation procédurale encourage la modularité en divisant le code en fonctions réutilisables. Ces fonctions peuvent être appelées à partir du programme principal ou d'autres fonctions.

function additionner(a, b) {
    return a + b;
}

let resultat1 = additionner(3, 4);
let resultat2 = additionner(5, 7);

function calculerMoyenne(notes) {
    // Logique de calcul de la moyenne
    // ...
    return moyenne;
}

function validerFormulaire() {
    // Logique de validation du formulaire
    // ...
}

function afficherMessageBienvenue() {
    console.log("Bienvenue sur notre site !");
}

afficherMessageBienvenue();

function estPair(nombre) {
    return nombre % 2 === 0;
}

// Tests unitaires
console.log(estPair(4)); // Devrait afficher true
console.log(estPair(7)); // Devrait afficher false

function additionner(a, b) {
    return a + b;
}

function afficherMessage() {
    console.log("Bonjour !");
}

// Portée globale
let variableGlobale = "Je suis globale";

function exemple() {
    console.log(variableGlobale); // Accessible ici
}

exemple();
console.log(variableGlobale); // Accessible ici aussi

function exemple() {
    var variableLocale = "Je suis locale";
    console.log(variableLocale); // Accessible ici
}

exemple();
// console.log(variableLocale); // Erreur, non accessible à l'extérieur de la fonction

function exemple() {
    let variableLocale = "Je suis locale";
    const autreVariableLocale = "Je suis aussi locale";
    console.log(variableLocale); // Accessible ici
    console.log(autreVariableLocale); // Accessible ici aussi
}

exemple();
// console.log(variableLocale); // Erreur, non accessible à l'extérieur de la fonction
// console.log(autreVariableLocale); // Erreur, non accessible à l'extérieur de la fonction

if (true) {
    let variableBloc = "Je suis dans un bloc";
    console.log(variableBloc); // Accessible ici
}

// console.log(variableBloc); // Erreur, non accessible à l'extérieur du bloc

for (let x = 1; x <= 5; x++) {
    // Faites quelque chose avec la variable x
    console.log(x);
}
//Dans ce code, la variable "x" est déclarée à l'intérieur de la boucle for et est incrémentée à chaque itération de la boucle. La boucle s'exécutera donc pour "x" égal à 1, 2, 3, 4 et 5

function triSelection(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Trouver l'index du plus petit élément dans la sous-liste non triée
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Échanger l'élément le plus petit avec le premier élément de la sous-liste triée
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Exemple d'utilisation
let tableau = [64, 25, 12, 22, 11];
let tableauTrie = triSelection(tableau);
console.log("Tableau trié par tri sélectif : ", tableauTrie);

//étapes binaire est un algorithme de recherche efficace qui suppose que le tableau dans lequel vous effectuez la recherche est trié. La condition nécessaire pour utiliser la recherche binaire est donc que le tableau soit préalablement trié par ordre croissant (ou décroissant).
function rechercheBinaire(tab, cible) {
    let debut = 0;
    let fin = tab.length - 1;

    while (debut <= fin) {
        let milieu = Math.floor((debut + fin) / 2);

        if (tab[milieu] === cible) {
            return milieu; // La cible a été trouvée
        } else if (tab[milieu] < cible) {
            debut = milieu + 1; // Recherche dans la moitié supérieure
        } else {
            fin = milieu - 1; // Recherche dans la moitié inférieure
        }
    }

    return -1; // La cible n'a pas été trouvée
}

// Exemple d'utilisation
let tabTrié = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = rechercheBinaire(tabTrié, 7);
console.log(result); // Affichera l'index de 7 dans le tab trié
//Le tableau doit être trié pour que la recherche binaire fonctionne efficacement.






