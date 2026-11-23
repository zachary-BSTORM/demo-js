// les collections 

let mesFruits = ["pomme","banane","poire","orange"]



// push : ajout
mesFruits.push("kiwi") // ["pomme","banane","poire","orange", "kiwi"]


// pop : suppression du dernier élement
mesFruits.pop() // ["pomme","banane","poire","orange"]


// shift : retire et retourne Le premier élément
mesFruits.shift() // result = "pomme" | reste -> ["banane","poire","orange"]



// splice : retire ou ajoute un élément 
// splice(index départ , nb à supprimer , éléments à ajouter)
mesFruits.splice(0,1) // retire un élément à partir de l'index 0
mesFruits.splice(1,3) // retire deux éléments à partir de l'index 1

mesFruits.splice(5 , 2 , "kiwi") // retire des éléments et en ajoute 


// slice : renvoie une partie d'un tableau
// slice ( index de départ , index de fin ( exclu ) )
let result = mesFruits.slice(0,3) // récupère une copie de la liste



// join : effectue une concatenation des éléments d'un tableau
mesFruits.join("")


// indexOf : retourne l'index d'un élément
let index = mesFruits.indexOf("banane") // 1


// includes : verifie la présence d'un élément 
let email = "mail@mail.com"

let resultTestEmail = email.includes("@") // true


// find : renvoie le premier élément correspondant au prédicat
let resultFind = mesFruits.find((e) => e === "banane")


// findIndex : renvoie le premier index correspondant au prédicat
let resultFindIndex = mesFruits.findIndex((e) => e.length > 8)

datas[resultFindIndex]


// findLast : renvoie le dernier index correspondant au prédicat
let resultFindLast = mesFruits.findLast((e) => e === "banane")


// some
// renvoie vrai si au moins un élément respecte le predicat
let resultSome = mesFruits.some((e) => e.length > 2) // true


// every
let resultEvery = mesFruits.every((e) => e.length > 8) // false


// sort : effectue un tri 
let mesFruitsSort = ["banane","pomme","cerise","orange"]

console.log(mesFruitsSort);

 mesmesFruitsSortFruits.sort()

 console.log(mesFruitsSort);

 mesFruitsSort.sort((a,b) =>  a.length - b.length)

console.log(mesFruitsSort);