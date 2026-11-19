
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

// -----------------------------------------------------

let id = prompt("Entrez votre id")
// si id commence par ad.... c'est un admin
// si id commence par us.... c'est un user


if(id.startsWith("ad")){
    console.log(`Bienvenue administrateur ${id} `);
}else 
    if(id.startsWith("us")){
    console.log(`Bienvenue utilisateur ${id}`);
}else{
    console.log("Votre identifiant est incorrecte");
    
}