/*
● Utilisez « prompt » pour saisir une note sur 20.

Si l’utilisateur n’a rien encodé ou a saisi une valeur en dehors des valeurs autorisées,
stockez « null » dans la variable.

● Affichez ensuite la note et son appréciation en utilisant un « alert »,
selon les seuils suivants :
○ ≥ 18 → "Excellent"
○ ≥ 14 → "Bien"
○ ≥ 10 → "Suffisant"
○ < 10 → "Insuffisant"
Si la note vaut « null », affichez le message : « Résultat invalide encodé ».
*/
// let resultat;
// let noteStr = prompt("Entrez une note : ")

// let noteNumber = parseInt(noteStr)

// if(noteStr.length < 1  || noteNumber >= 20 || noteNumber <= 0){
//     resultat = null
// }else{

//     switch (true) {
//         case noteNumber > 18:
//                 resultat = "Excellent"
//             break;

//         case noteNumber > 14:
//                 resultat = "Bien"
//             break;

//         case noteNumber > 10:
//                 resultat = "Suffisant"
//             break;

//         default:
//             resultat = "Insuffisant"
//             break;
//     }
// }

// alert(`${resultat === null ? "Résultat invalide encodé" : `Le résultat est ${resultat}`}`);





// ----------------------------------------------------------------------
// Calculatrice simple

// nb1 - operator - nb2 : prompt()

// opérations = + - * /

// afficher le calcul complet lors de l'affichage du résultat


let result = prompt("Entrez le calcul à éffectuer en séparant les valeurs et opérateur par des espaces");


resultArray = result.split(" ")


console.log(resultArray[0]);
console.log(resultArray[1]);
console.log(resultArray[2]);



