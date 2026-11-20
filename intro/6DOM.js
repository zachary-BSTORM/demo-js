// Notes de cours JavaScript : DOM et Boucles

// 1. Manipulation du DOM

// Sélection d'éléments

// Sélection d'un seul élément (le premier trouvé)
document.querySelector("p")
document.querySelector("#id")
document.querySelector(".class")

// Sélection de plusieurs éléments (retourne une NodeList)
document.querySelectorAll("li")


// Création et modification d'un élément

// Création d'un élément
let p = document.createElement("p")

// Accès au style et au contenu texte
p.style.color = "blue"
p.textContent = "Nouvelle valeur"


// Modification des classes CSS

p.classList                      // Renvoie la liste des classes de l'élément
p.classList.add("newClasse")     // Ajoute une classe
p.classList.remove("newClasse")  // Supprime une classe
p.classList.toggle("newClasse")  // Ajoute la classe si absente, la supprime si présente


// Insertion, remplacement et suppression

div.appendChild(p)   // Ajoute comme dernier enfant
div.prepend(p)       // Ajoute comme premier enfant
div.before(p)        // Ajoute juste avant l'élément div
div.after(p)         // Ajoute juste après l'élément div
div.replaceWith(p)   // Remplace div par p
p2.remove()          // Supprime l'élément du DOM
