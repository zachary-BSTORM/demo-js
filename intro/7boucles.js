
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


// Boucles `for` et `forEach`

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Boucle for classique (avec index)
for (let index = 0; index < data.length; index++) {
    console.log(`index : ${index}`)
}

// Méthode forEach (parcourt chaque élément d'une collection)
datas.forEach((element) => {
    console.log(element)
})


// Boucles `for` et `forEach`

let datas = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Boucle for classique (avec index)
for (let index = 0; index < datas.length; index++) {
    console.log(`index : ${index}`)
}

// Méthode forEach (parcourt chaque élément d'une collection)
datas.forEach((element) => {
    console.log(element)
})

