// operateurs

// 1. Opérateurs arithmétiques


// - Addition : +
// attention : avec une string, + fait une concaténation ("5" + 3 -> "53")
 let a = 5 + 3; // 8


// - Soustraction : -
 let b = 5 - 3; // 2


// - Multiplication : *
 let c = 5 * 3; // 15


// - Division : /
// le résultat est toujours décimal (pas de division entière en JS)
// pour la partie entière : Math.floor(5 / 3) -> 1
 let d = 5 / 3; // 1.6666666666666667

// - Modulo : % (reste de la division entière)
// utile pour savoir si un nombre est pair : n % 2 === 0
 let e = 5 % 3; // 2


// - Exponentiation : ** (puissance)
// 5 ** 3 = 5 * 5 * 5
 let f = 5 ** 3; // 125

// -------------------------------------------
// 2. Opérateurs de comparaison
// une comparaison renvoie toujours un booléen : true ou false


// - Égalité : == (valeur égale)
// convertit les types avant de comparer : 5 == "5" -> true
 let a2 = 5 == 5; // true


// - Égalité stricte : === (valeur et type égaux)
// pas de conversion : 5 === "5" -> false
// -> on utilise === par défaut
 let b2 = 5 === 5; // true


// - Inégalité : != (valeur différente)
 let c2 = 5 != 3; // true



// - Inégalité stricte : !== (valeur et type différents)
// ici true car 5 (number) et "5" (string) n'ont pas le même type
// -> on utilise !== par défaut
let d2 = 5 !== "5"; // true


// - Supérieur : >
let e2 = 5 > 3; // true


// - Supérieur ou égal : >=
let f2 = 5 >= 5; // true


// - Inférieur : <
let g = 5 < 3; // false


// - Inférieur ou égal : <=
let h = 5 <= 5; // true


// 3. Opérateurs logiques


// - ET logique : && (et) (esperluette)
// true seulement si les DEUX côtés sont vrais
 let a3 = true && false; // false


// - OU logique : || (ou) (pipe)
// true si AU MOINS UN des côtés est vrai
let b3 = true || false; // true



// - NON logique : ! (non)
// inverse la valeur : true -> false, false -> true
let c3 = !true; // false



// ------------------------------------------------------


// raccourci d'ecriture
let value = 0

// post-incrementation
// value++ : utilise la valeur PUIS ajoute 1
value++ // value vaut 1
console.log(value++); // affiche 1, puis value vaut 2


// pre-incrementation
// ++value : ajoute 1 PUIS utilise la valeur
++value // value vaut 3
console.log(++value); // value vaut 4, affiche 4


// post-decrementation
// value-- : utilise la valeur PUIS enlève 1
value-- // value vaut 3
console.log(value--); // affiche 3, puis value vaut 4


// pre-decrementation
// --value : enlève 1 PUIS utilise la valeur
--value // value vaut 3
console.log(--value); // value vaut 4, affiche 4


// opérateurs d'affectation combinés : value += 1 équivaut à value = value + 1
value += 1 // value = value + 1

value -= 1 // 5 - 1 -> 4

value /= 5 // 4 / 5 -> 0.8

value *= 5 // 0.8 * 5 -> 4

value **= 5 // 4 ** 5 -> 1024

value %= 5 // 1024 % 5 -> 4

