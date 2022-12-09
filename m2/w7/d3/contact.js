let lista = document.querySelector("#listaUtenti");
let inputUser = document.querySelector("#nuovoUtente");
let aggiungi_btn = document.querySelector("#aggiungi");
let users = [];                             // array vuoto
let backup = localStorage.getItem("utenti")
console.log(backup)

if (backup) {
    backup = backup.split(",");
    backup = JSON.parse(backup)
    console.log(backup)
    backup.forEach(element => {
        users.push(element)
    });  
    console.log(users)
}



aggiungi_btn.addEventListener("click", () => {
    let usr = new User(inputUser.value);    // è l'oggetto che definisco a riga 34
    users.push(usr);
    localStorage.setItem("utenti", JSON.stringify(users))
    writelnList();                          // lancio la funzione
});

function writelnList() {
    lista.innerHTML = "";
    users.forEach((el) => {    // parametri di for each(valore corrente, indice, array)
        lista.innerHTML += (`<li>${el.logUser()}</li>`); // utilizzo il metodo dell'oggetto sotto
    })
    console.log(users);
}

/*CLASS*/
class User {
    name = "";
    constructor(_name) {
        this.name = _name;
    }
    logUser() {
        return `<b>${this.name}</b>`;
    }
}


function resetList() {
    localStorage.clear("utenti")

}
function removeList() {
    localStorage.setItem("utenti", "")

}