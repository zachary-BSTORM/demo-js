let datas = [
    {
        id: 1,
        username: "Alice Martin",
        login: "amartin",
        password: "Password123!",
        role: "admin"
    },
    {
        id: 2,
        username: "Lucas Bernard",
        login: "lbernard",
        password: "User2026#",
        role: "admin"
    },
    {
        id: 3,
        username: "Chloé Dubois",
        login: "cdubois",
        password: "ChloéSecure99",
        role: "user"
    },
    {
        id: 4,
        username: "Thomas Petit",
        login: "tpetit",
        password: "ModPass!45",
        role: "user"
    },
    {
        id: 5,
        username: "Emma Moreau",
        login: "emoreau",
        password: "GuestAcc01*",
        role: "user"
    }
];


// 1. implémenter une fonction qui affiche le login et username d'un utilisateur

function showLoginAndUsername(utilisateur) {
    console.log(`login : ${utilisateur.login} - username : ${utilisateur.username}`);  
}



// 2. implémenter une fonction qui affiche les login et username de tous les utilisateurs 
function showAllUsers(utilisateurs) {
    datas.forEach((e) => {
        console.log(` les informations sont ${e.login}`);
    })
}

showAllUsers(datas,showLoginAndUsername)

// 3. implémenter une fonction qui ajoute au login l'année actuel
// new Date() -> renvoie la date actuelle
// getFullYear() -> renvoie l'année d'une date

function addYearToLogin(login){
    return login + new Date().getFullYear()
}

function getAllUsers(datas , methodLogin){
    return datas.forEach((e) => {
        methodLogin(e)
    })
}

datas = getAllUsers(datas , addYearToLogin)

// 4. implémenter une fonction qui renvoie les utilisateurs avec le role "user"

function getByRole(role) {
    let result = []
    datas.forEach((e) => {
        if(e.role === role){
            result.push(e)
        }
    })
    return result
}
// 5. implémenter une fonction qui renvoie les utilisateurs avec le role passé en paramètre

function getUserByRole(datas , role){
    return datas.filter((e) => e.role === role)
}


let newListUser = getUserByRole(datas,"user")
let newListAdmin = getUserByRole(datas,"admin")