let url = "https://raw.githubusercontent.com/RiccardoCalvi/fs0722b-Riccardo-Calvi/main/m2/w7/d5/api/users.json";
var requestOptions = { method: "GET", redirect: "follow" };
let cardContainer = document.getElementById("card-container");
let image = {  male: "https://raw.githubusercontent.com/RiccardoCalvi/fs0722b-Riccardo-Calvi/main/m2/w7/d5/base/assets/img/male.png",  female: "https://raw.githubusercontent.com/RiccardoCalvi/fs0722b-Riccardo-Calvi/main/m2/w7/d5/base/assets/img/female.png",}


/*  
 *  Questa funzione si occupa di generare l'html necessario per contenere
 *  le Card Utente.
 *  Ottiene come parametro un oggetto utente e genera l'html della card
 */
function creaCard(utente) {

  aggiustaLinkImg(utente)

  let card = document.createElement("div");
  card.className = "card shadow m-3";

  let img = document.createElement("img");
  img.src = utente.profileURL
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
 *  Questa funzione si occupa di convertire il link dell'immagine profilo
 *  con un link corretto conservato all'interno dell'oggetto 'image'.
 *  Controlla il sesso dell'utente passato e sostituisce con il link corretto.
 */
function aggiustaLinkImg(utente) {
  utente.profileURL = ((utente.gender == "Male") ? image.male : image.female);
}

/*  
 *  Questa funzione si occupa di ottenere un array di utenti (oggetti)
 *  tramite il primo '.then' trasformo la risposta in formato JSON
 *  tramite il secondo '.then' creo un loop su tutti gli utenti e credo la card
 */
fetch(url, requestOptions)
  .then(response => response.json())
  .then(result => {
    result.forEach(utente => {
      creaCard(utente)
    });
  })
  .catch(error => console.log('error', error));