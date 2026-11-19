// Créez un script qui utilise les popups du navigateur :



// ● Demandez un prix à l'utilisateur via prompt. 
// Convertissez-le en réel, 
// affichez-le dans la console, 
// puis formatez-le pour un affichage en euros.

let price = prompt("Entrez un prix : ");

price = parseFloat(price);

console.log(price);
console.log(price + " €");
console.log(price.toLocaleString('fr-FR' ,{style : "currency" , currency : "EUR"}));




// ● Demandez le prénom et le nom de famille via deux prompt. 
// Concaténez-les en une seule chaîne en utilisant une des méthodes vues au cours 
// et affichez le résultat.

let nom = prompt("Entrez votre nom : ")
let prenom = prompt("Entrez votre prénom : ")

console.log(nom + " " + prenom);



// ● Créez un objet personne avec nom, prénom, âge et ville.
// ○ Ajoutez une propriété email dynamiquement.
// ○ Affichez chaque propriété dans la console.

let myUser = {
    nom : "Doe",
    prenom : "Bob",
    age : 35,
    ville : "Bruxelles"
}

myUser.nom = prompt("Entrez votre nom ")
myUser.prenom = prompt("Entrez votre prenom ")
myUser.age = parseInt(prompt("Entrez votre age "))
myUser.ville = prompt("Entrez votre ville ")

// la propriété est ajouté dynamiquement
myUser.email = "emailtest@mail.com"

console.log(myUser);

console.log(myUser.email);

// Suppression d'une propriété d'un objet
delete myUser.email

console.log(myUser);


myUser.noom = "nouvelle valeur"

console.log(myUser);