/*
Créez un script qui utilise les popups du navigateur :

● Utilisez « prompt » pour saisir une note sur 20. Si l’utilisateur n’a rien encodé ou a
saisi une valeur en dehors des valeurs autorisées, stockez « null » dans la variable.

● Affichez ensuite la note et son appréciation en utilisant un « alert »,

selon les seuils suivants :
○ ≥ 18 → "Excellent"
○ ≥ 14 → "Bien"
○ ≥ 10 → "Suffisant"
○ < 10 → "Insuffisant"
○ null → "Résultat invalide encodé"

*/


let resultat;
let noteStr = prompt("Entrez une note : ")

let noteNumber = parseInt(noteStr)

if(noteStr.length < 1  || noteNumber >= 20 || noteNumber <= 0){
    resultat = null
}else{

    switch (true) {
        case noteNumber > 18:
                resultat = "Excellent"
            break;

        case noteNumber > 14:
                resultat = "Bien"
            break;

        case noteNumber > 10:
                resultat = "Suffisant"
            break;

        default:
            resultat = "Insuffisant"
            break;
    }
}

alert(`${resultat === null ? "Résultat invalide encodé" : `Le résultat est ${resultat}`}`);

