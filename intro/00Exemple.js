
// prompt() renvoie TOUJOURS une chaîne de caractères (même si on tape un nombre)
let age = prompt("Entrez votre age : ")
console.log(typeof age); // string

// "+" avec une string = concaténation, pas une addition
// ex : "20" + 5 -> "205"
console.log(age + 5);

// conversion de types

// number
// Number() transforme la chaîne en nombre ("20" -> 20)
let ageNumber = Number(age)

// Maintenant "+" fait bien une addition : 20 + 5 -> 25
console.log(ageNumber + 5);
console.log(typeof ageNumber); // number

// -------------------------------------------
// SISINON SI
// if (condition) { ... } else if (autre condition) { ... } else { ... }
// === compare la valeur ET le type
if (ageNumber < 18){
    console.log("Accès ");

}else
if(ageNumber === 5){

}

// SELONQUE
// switch compare "key" à chaque "case"
// break : sort du switch (sinon on continue dans le case suivant)
// default : exécuté si aucun case ne correspond (équivalent de "AUTRE")
switch (key) {
    case value:

        break;

    default:
        break;
}

// TantQue
// La condition est testée AVANT chaque tour : 0 tour possible
while (condition) {

}

// Faire TANTQUE
// La condition est testée APRÈS chaque tour : au moins 1 tour
do {

} while (condition);