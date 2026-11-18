// // récupération du nom , prénom , age 
// let nameInput = prompt("Entrez votre nom : ")
// let prenomInput = prompt("Entrez votre prénom : ")



// // crée un objet qui contient : 
// // nom - prenom - age
// let userInfo = {
//     nameObject :nameInput,
//     prenom : prenomInput
// }


// console.log(userInfos);



// // afficher 
// // au travers de l'objet 
// // - nom prénom et age

// console.log(userInfo.nameObject);
// console.log(userInfo.prenom);

let age = prompt("Entrez votre age : ")
console.log(typeof age); // string

console.log(age + 5);

// conversion de types 

// number
let ageNumber = Number(age)

console.log(ageNumber + 5);
console.log(typeof ageNumber); // string

// -------------------------------------------
// SISINON SI
if (ageNumber < 18){
    console.log("Accès ");
    
}else 
if(ageNumber === 5){

}

// SELONQUE
switch (key) {
    case value:
        
        break;

    default:
        break;
}

// TantQue
while (condition) {
    
}

// Faire TANTQUE
do {
    
} while (condition);