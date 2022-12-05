const campo_nome = document.getElementById("nome")
const campo_cognome = document.getElementById("cognome")
const campo_data = document.getElementById("data")
const form = document.getElementById('utenti');
const tabella = document.getElementById("tabella");

form.addEventListener('submit', crea);

function crea(event) {
    let utente = new Persona(campo_nome.value, campo_cognome.value, campo_data.value)
    creaRiga(utente)
    event.preventDefault();
}

function Persona(nome, cognome, data) {
    this.nome = nome
    this.cognome = cognome
    this.data = data
    this.eta = calcolaEta(this.data)
}

function calcolaEta(data) {
    const anno = new Date(data).getFullYear();;
    return 2022 - anno
}

function creaRiga(utente) {
    let riga = tabella.insertRow(tabella.rows.length);
    let cell1 = riga.insertCell(0);
    let cell2 = riga.insertCell(1);
    cell1.innerHTML = `${utente.nome} ${utente.cognome}`;
    cell2.innerHTML = utente.eta;
}