// 'use strict';

// Afficher des messages d'erreurs
// 'use strict'; // en haut du fichier
test  = 54

console.log(test);

// ---------------------------------------------

let age = prompt("Entrez votre age : ")

console.log(typeof age); // String

// Conversion en Number


let ageNumber = Number(age)
console.log(typeof ageNumber); // Number


// pourquoi convertir : car javascript effectue des conversion implicite
console.log(age + 35);
console.log(ageNumber + 35);

console.log("35" + ageNumber);


console.log(typeof (5 + "5"));


// ---------------------------------------------


console.log(typeof( Number("54") ));


console.log(typeof( Number("54.5") ));


console.log( Number("hello") );


console.log( Number("12px") );


console.log( Number(false) );
console.log( Number(true) );



let valueParse = parseInt("12.99px")

console.log(typeof(valueParse));
console.log(valueParse);


let valueFloat = parseFloat('3.99€')
console.log(typeof(valueFloat));
console.log(valueFloat);

// ---------------------------------------------

let value = 54
console.log(typeof (value));

let valueStr = String(value);
console.log(typeof (valueStr));


console.log(typeof String(null));

let arrayStr = String([1,2,3])
console.log(arrayStr);
console.log(typeof arrayStr);


console.log((42).toString());
console.log(typeof (42).toString());


// Conversion de valeur décimale
(14.2568956).toFixed(2)

console.log((14.2568956).toFixed(2));

// ---------------------------------------------


let valueFalse = Boolean(0)
console.log(typeof valueFalse);
console.log(valueFalse);


let valueTrue = Boolean(1)
console.log(typeof valueTrue);
console.log(valueTrue);



// thruthy - falsy

// voici les valeurs "FALSY" : faux toutes les autres sont "TRUTHY" : vrai
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));



// ---------------------------------------------


console.log( 5 == '5'); // true
console.log( 5 === '5'); // false
console.log( 5 !== '5'); // true


console.log(0 == ''); // true
console.log(0 === ''); // false


