// 'use strict';

// Afficher des messages d'erreurs
// 'use strict'; // en haut du fichier
// Sans 'use strict', JS accepte une variable jamais déclarée (sans let/const)
// Avec 'use strict', la ligne ci-dessous provoque une erreur : test is not defined
test  = 54

console.log(test); // 54

// ---------------------------------------------

let age = prompt("Entrez votre age : ")

console.log(typeof age); // String

// Conversion en Number


let ageNumber = Number(age)
console.log(typeof ageNumber); // Number


// pourquoi convertir : car javascript effectue des conversion implicite
// exemple si on tape 20 :
console.log(age + 35); // "2035" -> concaténation (age est une string)
console.log(ageNumber + 35); // 55 -> addition

console.log("35" + ageNumber); // "3520" -> une string d'un côté = concaténation


console.log(typeof (5 + "5")); // "string" ("55")


// ---------------------------------------------
// Number() : convertit en nombre, renvoie NaN si la conversion est impossible


console.log(typeof( Number("54") )); // "number"


console.log(typeof( Number("54.5") )); // "number" (les décimaux aussi)


console.log( Number("hello") ); // NaN


console.log( Number("12px") ); // NaN -> Number() refuse tout caractère non numérique


console.log( Number(false) ); // 0
console.log( Number(true) ); // 1



// parseInt() : lit le début de la chaîne et s'arrête au premier caractère invalide
// garde seulement la partie entière
let valueParse = parseInt("12.99px")

console.log(typeof(valueParse)); // "number"
console.log(valueParse); // 12


// parseFloat() : pareil mais garde les décimales
let valueFloat = parseFloat('3.99€')
console.log(typeof(valueFloat)); // "number"
console.log(valueFloat); // 3.99

// ---------------------------------------------
// String() : convertit n'importe quelle valeur en chaîne

let value = 54
console.log(typeof (value)); // "number"

let valueStr = String(value);
console.log(typeof (valueStr)); // "string"


console.log(typeof String(null)); // "string" (la valeur devient "null")

// un tableau devient ses éléments séparés par des virgules
let arrayStr = String([1,2,3])
console.log(arrayStr); // "1,2,3"
console.log(typeof arrayStr); // "string"


// .toString() : même résultat, mais s'utilise comme une méthode sur la valeur
// (attention : ne fonctionne pas sur null ou undefined, contrairement à String())
console.log((42).toString()); // "42"
console.log(typeof (42).toString()); // "string"


// Conversion de valeur décimale
// .toFixed(n) : arrondit à n décimales et renvoie une STRING
(14.2568956).toFixed(2)

console.log((14.2568956).toFixed(2)); // "14.26"

// ---------------------------------------------
// Boolean() : convertit une valeur en true ou false


let valueFalse = Boolean(0)
console.log(typeof valueFalse); // "boolean"
console.log(valueFalse); // false


let valueTrue = Boolean(1)
console.log(typeof valueTrue); // "boolean"
console.log(valueTrue); // true



// thruthy - falsy

// voici les valeurs "FALSY" : faux toutes les autres sont "TRUTHY" : vrai
// ces 6 lignes affichent false
// à l'inverse : "0", " ", [] ou {} sont truthy (true)
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));



// ---------------------------------------------

// Dès qu'un des deux cotés est en String
// le reste sera automatiquement converti en Str
console.log(33 + 33); // 66
console.log('33' + 33); // 3333
console.log(33 + '33'); // 3333
console.log('33' + '33');// 3333


// == convertit les types avant de comparer, === non
console.log( 5 == '5'); // true
console.log( 5 === '5'); // false
console.log( 5 !== '5'); // true


// '' est converti en 0 avec == -> source de bugs, d'où l'usage de ===
console.log(0 == ''); // true
console.log(0 === ''); // false


// ---------------------------------------------
// Comparaison de chaînes : JS compare les codes des caractères (table ASCII / Unicode)

// https://www.ascii-code.com/fr
console.log('b' > 'a'); // true (98 > 97)


// charCodeAt(0) : renvoie le code du caractère à l'indice 0
console.log('0'.charCodeAt(0)); // 48

console.log('1'.charCodeAt(0)); // 49


// "-" n'existe pas pour les chaînes : JS convertit les deux en nombre
console.log('45' - '0'); // 45 (number)