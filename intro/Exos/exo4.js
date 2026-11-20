
// Calculatrice simple

let resultat = null
let isCorrect = true

/*
let nb1 = prompt("Entrez la première valeur ")

let nb1Array = nb1.split('')
console.log(nb1Array);

nb1Array.forEach((e) => {
    
    if (!isNaN(e)) {
        console.log("valide");
    }else{
        console.log("invalide");
    
    }
})
*/

let nb1 = prompt("Entrez la première valeur ")

let op = prompt("Entrez l'opérateur : + - / * ")

let nb2 = parseInt(prompt("Entrez la deuxième valeur "))


switch (op) {
    case "+":
        resultat = nb1 + nb2
        break;
    case "-":
        resultat = nb1 - nb2
        break;
    case "*":
        resultat = nb1 * nb2
        break;

    case "/":
            if(nb2 != 0) {
                resultat = nb1 / nb2
            }else{
                isCorrect = false
            }
        break;
    default:
        console.log("Veuillez entrez un opérateur valide : + - * / ");
        isCorrect = false
        break;
}

if(isCorrect){
    console.log(`Le résultat de ${nb1} ${op} ${nb2} = ${resultat}`);
}else{
    console.log("Aucun résultat n'as été trouvé"); 
}

console.log(isCorrect ? `Le résultat de ${nb1} ${op} ${nb2} = ${resultat}` : "Aucun résultat n'as été trouvé");
