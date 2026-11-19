
// 0 . Les commentaires


// Ceci est un commentaire sur une seule ligne


/* 
Ceci est un commentaire sur plusieurs lignes

Il peut s'étendre sur plusieurs lignes
*/


// 1. Variables

// variable modifiable
let maVariable = 5

// constante
const MACONSTANTE = 5


// Interdiction de l'utilisé

var maVilaineVariable = 5


// --------------------------------------------
console.log("------------------------------")

// Typage
// typeof : permet de récupérer le type d'une instance
console.log(typeof 5);


// Number
let variableNumber = 5
console.log(typeof variableNumber);

// décimale aussi en Number
let variableReel = 3.14
console.log(typeof variableReel);


// BigInt: entier de grande taille (plus grand que 2^53 - 1)
let variableBigInt = 1234567890123456789012345678901234567890n;
console.log(typeof variableBigInt);

// String 
let variableString = "hello"
console.log(typeof variableString);

// booléen 
let variableBool = false
console.log(typeof variableBool);

// Undefined :  absence de valeur
let valueInconnu = undefined
console.log(typeof valueInconnu);

// null : permet de définir une valeur à non défini
let valueNull = null
console.log(typeof valueNull);


// NAN : Not a number
let valueNaN = NaN
console.log(typeof valueNaN);

// la comparaison ne permet pas de détecter le NaN
console.log( NaN === NaN);
// Obligation d'utiliser la methode : isNaN()
console.log( isNaN(NaN));


// objet complexe
let user = {
    name : "bob",
    age : 35,
    authors : ["un","deux"],
    adresse : {
                rue : "rue des champs",
                numero : 25,
                ville : "bruxelles"
                }

}
// . -> accesseur : permet d'accéder au attributs de l'objet 
console.log(user.name);



// Arrays
let myArrayNumber  = [1,2,3,4,5,6]
let myArrayString = ["1","2","3","4"]
let myArrayObj = [
    {
        name : "test",
        age : 35
    }
]

// les dates 
let myDate = new Date()
console.log(myDate);


console.log("------------------------------")

// Ecrire et lire

// Affichage dans la console
console.log("log");
console.debug("debug");
console.warn("warn");
console.error("error");


// affiche un message dans un popup
// alert("test")


// demande confirmation a l'utilisateur avec un popup
// let result = confirm("Êtes vous sur ?")
// console.log(result);


// prompt ( demande une information à l'utilisateur)
// let nameInput = prompt("Entrez votre nom : ")
// console.log(nameInput);


// ----------------------------------------------------
// Les valeurs récupérer par le prompt sont en "String" il sera nécéssaire de convertir la valeur pour certaines opérations

let age = prompt("Entrez votre age : ")

console.log(typeof age); // String

// Conversion en Number

let ageNumber = Number(age)

console.log(typeof ageNumber); // Number





