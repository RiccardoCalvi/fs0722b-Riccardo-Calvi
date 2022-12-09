let url = `https://dummyjson.com/users?limit=10`;
const requestOptions = { method: "GET", redirect: "follow" };
const cardContainer = document.getElementById("card-container");

/*  
 *  Tramite il Try-Catch vado a richiamare la funzione principale del progetto... il Fetch().
 *  La funzione 'getUser()' mi ritornerà una Promise che nel caso sia Fullfilled eseguirà
 *  un ciclo su tutti gli utenti, ad ogni iterazione del ciclo verrà generata un Card Utente
 *  grazie alla funzione 'creaCard()' al quale passo l'utente indicizzato.
 *  Nel caso in qui ci sia un errore/problema verrà eseguita automaticamente la funzione di 'catch()'
 *  che mi stamperà in 'console.log()' l'errore riscontrato.
 */
function cambiaValore() {
  url = `https://dummyjson.com/users?limit=${document.getElementById("utenti-selector").value}`;
  cardContainer.innerHTML = ""
  mostra()
}

function mostra() {
  try {
    let prom = getUser()
    prom.then((utenti) => {
      utenti = utenti.users
      console.log(utenti[0])
      utenti.forEach(utente => {
        creaCard(utente)
      });
    })
  } catch (e) {
    console.log("Errore: " + e)
  }
}


/*  
 *  Questa funzione si occupa di generare l'html necessario per contenere
 *  le Card Utente.
 *  Ottiene come parametro un oggetto utente e genera l'html della card
 */
function creaCard(utente) {

  let card = document.createElement("div");
  card.className = "card shadow m-3";

  let img = document.createElement("img");
  img.src = utente.image
  img.className = "card-img-top p-4 rounded-circle w-50 mx-auto mb-4"

  let cardBody = document.createElement("div");
  cardBody.className = "card-body d-flex flex-column p-4";

  let title = document.createElement("h5");
  title.innerText = `${utente.firstName} ${utente.lastName}`;
  title.className = "card-title text-center";

  let link = document.createElement("a");
  link.href = `mailto:${utente.email}`
  link.innerText = utente.email;
  link.className = "mx-auto arancione";

  cardBody.appendChild(img);
  cardBody.appendChild(title);
  cardBody.appendChild(link);
  card.appendChild(cardBody);
  cardContainer.appendChild(card);
};

/*  
 *  Questa funzione asincrona ottenere tramite, un await sul 'fetch()', tutti gli utenti.
 *  L'url e i parametri del fetch vengono passati come varibili che si trovano
 *  insieme alle altre variabili all'inizio dello script.
 *  Il file JSON contenente gli utenti si trova su github o anche nella cartella 'api'
 *  di questo progetto.
 *  Ritorna l'array di utenti (oggetti)
 */
async function getUser() {
  const response = await fetch(url, requestOptions);
  return response.json();
}

mostra()