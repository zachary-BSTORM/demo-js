
let nom = "Doe"
let prenom = "John"

// concatenation simple 
let concat1 = nom + " " + prenom

console.log(concat1);


// concatenation en ajoutant un élément ( une nouvelle référence est crée)
concat1 += " test"

console.log(concat1);
 


// concatenation avec les templates literals : permet d'interprété le code entre : ${} 
// `` : altgr +  µ
let concat2 = ` L'utilisateur ${prenom} ${nom} est inscrit `

console.log(concat2);


// exemple de concatenation
let nb1 = 5
let operator = "+"
let nb2 = 10

console.log(`Le resultat de ${nb1} ${operator} ${nb2} = ${nb1 + nb2 }`);



// les String sont un tableau de caractères

let valueStr = "Hello javascript"

// on peut y accéder au travers d'un indice
console.log(valueStr[0]);


// on peut transformer un array de str en string avec la methode : myArray.join(seperateur)
let valueArray = ["hello" , "javascript"]


console.log(valueArray.join(" - "));

// Split(séparateur) : Permet de transformer un String en Array

let valueSplit = "hello javascript !"

let resultSplit = valueSplit.split(" ")

console.log(resultSplit);



// convertir une valeur en string avec la methode : toString()
let valueNumber = 564

console.log(typeof valueNumber.toString());



// il est possible de récupérer la taille d'un string ( et des arrays )
// la methode nous renvoie un number
let message = "hello javascript !"
console.log(message.length);


// startwith() : permet de tester si un String commence par un String précis
// la methode est case sensitive ( sensible au majuscule et minuscule )
// la methode renvoie un Booléen
let valueTest = "voici une valeur"

console.log(valueTest.startsWith("voici"));



// indexof(...) : permet de récupérer la position d'un élément
// renvoie la position de la première occurence qui correspond
let valueIndex = "hello test "

console.log(valueIndex.indexOf('t'));




// --------------------------------------------------


