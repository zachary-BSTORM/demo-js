// les fonctions en Javascript

// ------------------------------------------------

// Déclaration et portée

// accessible avant sa déclaration 
// peut utiliser le : this
function maFonction(){
    console.log("hello");
}

// pas accessible avant sa déclarations
// peut utiliser le : this
const maFonction2 = function (){
    console.log("hello");
}

// pas accessible avant sa déclarations
const maFontion3 = () => {
    
}
// fonction fleché ou anonyme 


// sans accolades : une seule instruction et le return est implicite
//              paramètres actions à executé   le code  
let funcFlech = (a,b)       =>                  a + b 


// un bloc de code sur plusieurs lignes ajout des accolades : { } et le mot clé return
let funcFlech2 = (a,b) => {
    if(a > 10){
    }

    if ( (a + b) <  45 ){
    }

    return a + b
}

// ------------------------------------------------

// ici le mot clé "this" fait référence à l'instance courante
let personne = {
    username : "John",
    role : "Admin",
    presentation : function sePresenter() {
        console.log(`L'utilisateur ${this.username} est ${this.role}`);
    }
}

// lors de l'appel aucun paramètre n'est passé le this fait référence à "personne"
personne.presentation()


// ------------------------------------------------

// avec parenthèse appel de la methode 

// ici on l'appelle
maFonction()

// passer la référence d"une methode ( l'adresse )
maFonction

// ------------------------------------------------

// Sans retour de valeur
function showInformation(){
    // ici pas de retour rien n'est retourné
    console.log('texte à afficher');
}

// appel de la méthode
showInformation()


// Avec retour de valeur
function getValue() {
    // le mot clé "return" permet de renvoyer quelque chose 
    return "value to send"
}

// appel de la methode ( récupération de valeur )
let result = getValue()


// ------------------------------------------------

// fournir des paramètres à nos fonctions 

// paramètres simple
function addition(a,b) {
    return a + b
    
}

let resultAddition = addition(5,4)
let resultAddition2 = addition(95,54)



// passer une collection en paramètres
function showItem(collection) {
    collection.forEach((element) => {
        console.log(`L'élément est : ${element}`);
    });
}


let maCollection = [1,2,3,4,5,6]
showItem(maCollection)



// passer un objet en paramètre
function presentation(user){
    console.log(`La personne ${user.username} est ${user.role}`);
}

let myUser = {
    username : "John",
    role : "user"
}

presentation(myUser) // console.log(`La personne John est user`);


// -----------------------------------------------------

// spread - rest operator
function moyenne(...values){
    // résultat =  values.reduce(  (total,element) =>   total + element, valeur de départ)
    let result = values.reduce(  (total,n)       =>   total + n      , 0 )
    
    return result / values.length
} 

function moyenne2(...values){
    return values.reduce((total,n) => total + n , 0 ) / values.length
    
} 

// il est dorévavant possible de passer un nombre indéfini de paramètres 
moyenne(1,2,3,4,5)
moyenne(1,2,3,4,5,6,7,8,9,10)


let maCollectionNumber = [1,2,3,4,5,6,7,8,9]

function reduceCollection(myCollection){
    return myCollection.reduce((total,v) => total + v , 0) / myCollection.length
}


let myObject = {
    color : "red",
    width : "20vw",
    fontSize : "22px"
}

// chaque valeur est récupérer séparément
let {a,b,c} = myObject


let {first , ...rest} = myObject
// first =     color : "red",
// rest =  width : "20vw",fontSize : "22px"

// -----------------------------------------------------

// Rendre un paramètre faculatatif

function showCar(color , brand , hp , nbWheel = 4) {
    console.log(`La voiture de couleur ${color} de marque ${brand} à une puissance de ${hp} chevaux ${nbWheel}`);
    
}
//le paramètre "nbWheel" est facultatif car il à une valeur par défaut
showCar("red","peugeot",90)
showCar("red","peugeot",90,6)



// ----------------------------------------------------------------

let datas = [
    {
        id: 1,
        username: "Alice Martin",
        login: "amartin",
        password: "Password123!",
        role: "admin"
    },
    {
        id: 2,
        username: "Lucas Bernard",
        login: "lbernard",
        password: "User2026#",
        role: "editor"
    },
    {
        id: 3,
        username: "Chloé Dubois",
        login: "cdubois",
        password: "ChloéSecure99",
        role: "user"
    },
    {
        id: 4,
        username: "Thomas Petit",
        login: "tpetit",
        password: "ModPass!45",
        role: "moderator"
    },
    {
        id: 5,
        username: "Emma Moreau",
        login: "emoreau",
        password: "GuestAcc01*",
        role: "guest"
    }
];

// page liste : getAll
function getDatas(){
    return datas
}

// page Détails : getById
function findById(id) {

    datas.forEach((element) => {

        if (element.id === id){
            return element
        }

        return null
    })
}


let resultFind = findById(5)

/*
   resultFind =  {
        id: 5,
        username: "Emma Moreau",
        login: "emoreau",
        password: "GuestAcc01*",
        role: "guest"
    }
*/


// modification : Update
function updateElement(id , usernameParams,loginParams) {
    datas.forEach((element) => {
        if(element.id === id){
           element =  {...element,username : usernameParams,login : loginParams  }
        }
    })
}

// suppression : Delete

function removeElement(id){
    datas = datas.filter((element) => element.id !== id)
}

// ----------------------------------------------------------------------------

let myCollectionFruts = ["pomme","banane","poire","orange"]


// map : effectue un traitement sur chaque élément d'une collection
let resultMap = myCollectionFruts.map((mot) =>  console.log(mot))

let resultMap2 = myCollectionFruts.map((mot) =>  mot.length > 5 ? console.log(mot) : console.log("moins de 5 caractères"))

let resultMap3 = myCollectionFruts.map( (mot) => {
    if(mot.length < 5){

    }

    return mot
})


let resultMap4 = myCollectionFruts.map((e) => showInfos(e))





// filter : renvoie une nouvelle liste sur base d'un prédicat
let resultFilter = myCollectionFruts.filter((element) => element.length < 3 )


let resultFilter2 = myCollectionFruts.filter((element) => {
    if(element.length && element.includes("@")){
        return element
    }

    return null
} )


let resultFilter3 = myCollectionFruts.filter((e) => showInfos(e))




// reduce : permet d'accumuler les valeurs dans un total

                // List         .reduce( (départ , instance courante) =>  action          , valeur de départ)

let resultReduce = [1,2,3,4,5,6].reduce((base,valeur)                 =>   base += valeur , 0)


// chainé les méthodes

let resultChained = myCollectionFruts.filter((e) => e.length < 5).map((element) => element += " testé ")


// -----------------------------------------------------------------


// Callback : appel de fonction depuis une fonction

let datasUsers = [
    {
        id: 1,
        username: "Alice Martin",
        login: "amartin",
        password: "Password123!",
        role: "admin"
    },
    {
        id: 2,
        username: "Lucas Bernard",
        login: "lbernard",
        password: "User2026#",
        role: "editor"
    },
    {
        id: 3,
        username: "Chloé Dubois",
        login: "cdubois",
        password: "ChloéSecure99",
        role: "user"
    },
    {
        id: 4,
        username: "Thomas Petit",
        login: "tpetit",
        password: "ModPass!45",
        role: "moderator"
    },
    {
        id: 5,
        username: "Emma Moreau",
        login: "emoreau",
        password: "GuestAcc01*",
        role: "guest"
    }
];

function showInfos(user){
    console.log(`l'utilisateur ${user.username} .... `) 
}


function showUsersInfos(users,action){
    users.forEach((u) => {
        if(u.role === "admin"){
            action(u)
        }
    })
}



showUsersInfos(datasUsers,showInfos)