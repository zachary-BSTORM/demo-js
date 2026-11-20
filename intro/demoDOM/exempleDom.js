let body = document.querySelector("body")



let div = document.createElement("div")


let h2 = document.createElement("h2")

h2.textContent = "Bienvenue sur le site"
h2.classList.add("text-center")
h2.classList.add("p-2")
h2.style.backgroundColor = "lightgrey"

div.appendChild(h2)


let p = document.createElement("p")

p.textContent = "voici un super site qui fait tout "

p.classList.add('p-2')
p.classList.add('text-center')
p.classList.add('bg-green')

div.appendChild(p)


body.appendChild(div)