# Notes de cours JavaScript : DOM et Boucles

## 1. Manipulation du DOM

### Sélection d'éléments
```js
// Sélection d'un seul élément (le premier trouvé)
document.querySelector("p")
document.querySelector("#id")
document.querySelector(".class")

// Sélection de plusieurs éléments (retourne une NodeList)
document.querySelectorAll("li")
```

### Création et modification d'un élément
```js
// Création d'un élément
let p = document.createElement("p")

// Accès au style et au contenu texte
p.style.color = "blue"
p.textContent = "Nouvelle valeur"
```

### Modification des classes CSS
```js
p.classList                      // Renvoie la liste des classes de l'élément
p.classList.add("newClasse")     // Ajoute une classe
p.classList.remove("newClasse")  // Supprime une classe
p.classList.toggle("newClasse")  // Ajoute la classe si absente, la supprime si présente
```

### Insertion, remplacement et suppression
```js
div.appendChild(p)   // Ajoute comme dernier enfant
div.prepend(p)       // Ajoute comme premier enfant
div.before(p)        // Ajoute juste avant l'élément div
div.after(p)         // Ajoute juste après l'élément div
div.replaceWith(p)   // Remplace div par p
p2.remove()          // Supprime l'élément du DOM
```

---

## 2. Les boucles (`while`, `do...while`, `for`, `forEach`)

### Boucle `while` et `do...while`
```js
// Boucle while : vérifie la condition AVANT d'exécuter
let container = document.querySelector("#container")
let value = 1

while (value < 10) {
    let p = document.createElement("p")
    p.textContent = `valeur ${value}`
    value += 1
    container.appendChild(p)
}

// Boucle do...while : exécute au moins une fois AVANT de vérifier la condition
let container2 = document.querySelector("#container2")
value = 9

do {
    let p = document.createElement("p")
    p.textContent = `valeur ${value}`
    value += 1
    container2.appendChild(p)
} while (false)
```

### Boucles `for` et `forEach`
```js
let datas = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Boucle for classique (avec index)
for (let index = 0; index < datas.length; index++) {
    console.log(`index : ${index}`)
}

// Méthode forEach (parcourt chaque élément d'une collection)
datas.forEach((element) => {
    console.log(element)
})
```

### Exemple pratique sur des `<li>`
```js
let x = 0
let lis = document.querySelectorAll("li")

// Remplir les <li> vides et changer leur couleur de fond
lis.forEach((li) => {
    if (li.textContent.length < 1) {
        li.textContent = x
        li.style.backgroundColor = "lightgrey"
        x += 1
    }
})

// Modifier la couleur selon l'état actuel
lis.forEach((e) => {
    if (e.style.backgroundColor === "lightgrey") {
        e.style.backgroundColor = "red"
    } else {
        e.style.backgroundColor = "green"
    }
})
```

---

## 3. Cas pratique : Générer des cartes utilisateurs

```js
// 1. Données à afficher
let datas = [
    { username: "john", role: "admin", age: 35 },
    { username: "sarah", role: "editor", age: 28 },
    { username: "marc", role: "user", age: 42 },
    { username: "claire", role: "moderator", age: 31 }
]

// 2. Sélection du parent qui recevra les éléments
let body = document.querySelector("body")

// 3. Parcours des données et création du HTML pour chaque utilisateur
datas.forEach((user) => {
    // Création du conteneur principal (la carte)
    let div = document.createElement("div")
    div.style.textAlign = "center"
    div.style.width = "60vw"
    div.style.padding = "10px"
    div.style.margin = "1rem"
    div.style.backgroundColor = "lightgrey"

    // Création des paragraphes enfants
    let usernameP = document.createElement("p")
    usernameP.textContent = user.username
    usernameP.style.backgroundColor = "white"

    let roleP = document.createElement("p")
    roleP.textContent = user.role
    roleP.style.backgroundColor = "white"

    let ageP = document.createElement("p")
    ageP.textContent = user.age
    ageP.style.backgroundColor = "white"

    // Insertion des paragraphes dans la div
    div.appendChild(usernameP)
    div.appendChild(roleP)
    div.appendChild(ageP)

    // Insertion de la div dans le body
    body.appendChild(div)
})
```