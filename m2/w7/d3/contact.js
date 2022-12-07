let lista = document.querySelector("#listaUtenti");
let inputUser = document.querySelector("#nuovoUtente");
let aggiungi_btn = document.querySelector("#aggiungi");
let users = [];                             // array vuoto

aggiungi_btn.addEventListener("click", () => {
    let usr = new User(inputUser.value);    // è l'oggetto che definisco a riga 34
    users.push(usr);                        // push nell'array
    writelnList();                          // lancio la funzione
});

function writelnList() {
    lista.innerHTML = "";
    users.forEach((el, index) => {    // parametri di for each(valore corrente, indice, array)
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