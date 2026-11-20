// utlisation du querySelector pour séléctionner un élément du dom
let maDiv = document.querySelector("#div")


// récupération d'un élément par sa balise
let p = document.querySelector("p")
console.log(p);

// récupération d'un élément par son id 
let pId = document.querySelector("#monParag")
console.log(pId);

// récupération d'un élément par une classe
let pClass = document.querySelector(".pClass")
console.log(pClass);


// récupération de plusieurs éléments du DOM
let lis = document.querySelectorAll("li")
console.log(lis);

console.log(lis[0]);

lis.forEach((li) => {
    li.textContent = "new Value"
})


// let exId = document.getElementById()
// let exClass = document.getElementsByClassName()
// let exTag = document.getElementsByName()

// ----------------------------------------------------------

let pHello = document.querySelector("#pHello")

console.log(pHello);

// l'on peut accéder à la valeur contenu dans notre balise et la modifier
pHello.textContent = "hello"

// Risque de modification du DOM !!!
// pHello.innerHTML = '<strong>hello</strong>'

// il est aussi possible de modifier le style directement
// pHello.style.backgroundColor = "red"
// pHello.style.padding = "12px"
// pHello.style.textAlign = "center"


// Accès et modification des classes css
// Afficher les classes d'un élément
console.log(pHello.classList);

// Ajouter une classe à un élément
pHello.classList.add("bg-green")
console.log(pHello.classList);

// Retirer une classe
pHello.classList.remove("bg-green")
console.log(pHello.classList);

// Ajout ou suppression d'une classe si elle es présente ou pas
pHello.classList.toggle("bg-red")
console.log(pHello.classList);
pHello.classList.toggle("bg-red")
console.log(pHello.classList);
pHello.classList.toggle("bg-red")

// Remplacer une classe par une autre
pHello.classList.replace("bg-red","bg-green")
console.log(pHello.classList);

// ------------------------------------------------------

// Ajouter un élément dans le DOM

// 1er étape : crée un élément
let newP = document.createElement("p")

//2eme étape : modifier l'élément
newP.textContent = "Voici un nouveau paragraphe"
newP.style.color = 'blue'


// 3iem étape : Pour l'ajouter dans le dom

    // 3.1 : récupérer un élément du DOM ( si vide le body )µ
    let container = document.querySelector("#container")

    // 3.2 : Ajouter l'élément crée dans l'élément du dom 
    container.appendChild(newP)


    