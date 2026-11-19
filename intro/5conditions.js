// conditions en Js


/*
// on peut passer n'importe quoi comme conditions si le résultat est un booléen
if(condition(s)){
code à éxécuter
}

*/ 
let valueA = 5
let valueB = 8

// SI ... FAIRE
if(valueA < valueB){
    console.log("A est plus petit");
    
}

// SI ... FAIRE ... SINON FAIRE ...
if(valueA < valueB){
    console.log("A est plus petit");
    
}else{
    console.log("A est plus grand");
}


// SI ... FAIRE ... SINONSI ... FAIRE ... SINON ...
if(valueA < valueB){
    console.log("A est plus petit");
    
}else if((valueB < valueA) && ( valueA === 5) || valueB == 8){
    console.log("A est plus grand");
}
else{
    console.log("Les valeurs sont identiques");
}


// SELONQUE ... VAUT ... FAIRE ...
// le switch ne gère qu'une variable 
let value = "un"

switch (value) {
    case "un":
            console.log("La valeur est à 1");

            break;
            
    case "deux":
        console.log("La valeur est à 2");
    break;

    default:
        console.log("La valeur n'est pas géré");
        break;
}


let role = 'admin'

switch (role) {
    case "admin":
        console.log("accès au ressource privé");
    break;
    case "user" :
        console.log("accès au ressource utilisateurs");
    break;

    default:
        break;
}


// ---------------------------------------


// Ternaire :   condition   ?   "valeur si vrai" : "valeur si faux"
let a = 10

let resultTernaire = a < 8 ?  "a est plus petit" : "a n'est pas plus petit" 

console.log(resultTernaire);


// ternaire à rallonge ( ! à éviter )


let valueTest = "hello"


let resultTernRall = valueTest == 'hello' ? "la valeur est hello" : value == "test" ? "la valeur est test" : value == "bob"


// Coallesce : permet de récupérer une valeur par défaut si la première valeur n'est pas disponible (null ou undefined )
let userScore = {
    score : 15
}

let result = userScore.scores ?? 0

console.log(result);


let infos = null

let nom = infos ?? "inconnu"

console.log(nom);
