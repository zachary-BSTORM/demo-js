
// 0 . Les commentaires
// Ils sont ignorés par JavaScript : ils servent à expliquer le code


// Ceci est un commentaire sur une seule ligne


/*
Ceci est un commentaire sur plusieurs lignes

Il peut s'étendre sur plusieurs lignes
*/


// 1. Variables

// variable modifiable
// let : la valeur peut être changée plus tard (maVariable = 10)
let maVariable = 5

// constante
// const : la valeur ne peut plus être réassignée (MACONSTANTE = 10 -> erreur)
// convention : nom en MAJUSCULES pour les vraies constantes
const MACONSTANTE = 5


// Interdiction de l'utilisé
// var : ancienne façon de déclarer (avant 2015), comportement piégeux
// -> on utilise toujours let ou const à la place

var maVilaineVariable = 5


// --------------------------------------------
console.log("------------------------------")

// Typage
// typeof : permet de récupérer le type d'une instance
// JavaScript est à typage dynamique : le type est déduit de la valeur
console.log(typeof 5); // "number"


// Number
let variableNumber = 5
console.log(typeof variableNumber); // "number"

// décimale aussi en Number
// pas de différence entier / réel en JS : tout est "number"
// attention : on utilise le point, pas la virgule
let variableReel = 3.14
console.log(typeof variableReel); // "number"


// BigInt: entier de grande taille (plus grand que 2^53 - 1)
// on le reconnaît au "n" à la fin du nombre
let variableBigInt = 1234567890123456789012345678901234567890n;
console.log(typeof variableBigInt); // "bigint"

// String
// texte entre guillemets "..." , apostrophes '...' ou backticks `...`
let variableString = "hello"
console.log(typeof variableString); // "string"

// booléen
// deux valeurs possibles : true ou false
let variableBool = false
console.log(typeof variableBool); // "boolean"

// Undefined :  absence de valeur
// c'est aussi la valeur d'une variable déclarée sans valeur : let x;
let valueInconnu = undefined
console.log(typeof valueInconnu); // "undefined"

// null : permet de définir une valeur à non défini
// différence : undefined = "pas encore de valeur", null = "vide, volontairement"
let valueNull = null
console.log(typeof valueNull); // "object" -> bug historique de JS, null n'est pas un objet


// NAN : Not a number
// résultat d'un calcul impossible, ex : Number("hello") -> NaN
let valueNaN = NaN
console.log(typeof valueNaN); // "number" (oui, "Not a Number" est de type number)

// la comparaison ne permet pas de détecter le NaN
console.log( NaN === NaN); // false : NaN n'est égal à rien, même pas à lui-même
// Obligation d'utiliser la methode : isNaN()
console.log( isNaN(NaN)); // true


// objet complexe
// un objet regroupe des données sous forme de paires   clé : valeur
// une valeur peut être un nombre, un texte, un tableau ou même un autre objet
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
// on peut enchaîner les points pour l'objet imbriqué : user.adresse.ville
console.log(user.name); // "bob"



// Arrays
// un tableau est une liste ordonnée de valeurs, entre crochets [ ]
// le premier élément est à l'indice 0 : myArrayNumber[0] -> 1
let myArrayNumber  = [1,2,3,4,5,6]
// ici ce sont des chaînes ("1"), pas des nombres (1)
let myArrayString = ["1","2","3","4"]
// un tableau peut aussi contenir des objets
let myArrayObj = [
    {
        name : "test",
        age : 35
    }
]

// les dates
// new Date() crée un objet contenant la date et l'heure actuelles
let myDate = new Date()
console.log(myDate);


console.log("------------------------------")

// Ecrire et lire

// Affichage dans la console
// même rôle, mais un niveau d'importance différent (couleur / filtre dans la console)
console.log("log");
console.debug("debug");
console.warn("warn"); // avertissement (jaune)
console.error("error"); // erreur (rouge)


// affiche un message dans un popup
// alert("test")


// demande confirmation a l'utilisateur avec un popup
// renvoie true (OK) ou false (Annuler)
let result = confirm("Êtes vous sur ?")
console.log(result);


// prompt ( demande une information à l'utilisateur)
// renvoie le texte saisi, ou null si l'utilisateur clique sur Annuler
let nameInput = prompt("Entrez votre nom : ")
console.log(nameInput);


// ----------------------------------------------------
// Les valeurs récupérer par le prompt sont en "String" il sera nécéssaire de convertir la valeur pour certaines opérations

let age = prompt("Entrez votre age : ")

console.log(typeof age); // String

// Conversion en Number
// si la saisie n'est pas un nombre (ex : "abc"), le résultat sera NaN

let ageNumber = Number(age)

console.log(typeof ageNumber); // Number





