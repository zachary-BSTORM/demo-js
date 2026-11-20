let body = document.querySelector("body")


let h2 = document.createElement("h2")

h2.style.color = "blue"
h2.textContent = "Bienvenue sur le site"

body.appendChild(h2)


let div = document.createElement("div")

div.style.width = "90vw"
div.style.margin = 'auto'
div.style.border = "1px solid red"


let p = document.createElement("p")

p.textContent = "voici des informations sur le site"
p.style.color = 'red'

div.appendChild(p)

body.appendChild(div)


let p2 = document.createElement("p")

p2.textContent = "informations de bas de page"
p2.style.color = 'blue'

body.appendChild(p2)