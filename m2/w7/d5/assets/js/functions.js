let url =
  "https://raw.githubusercontent.com/RiccardoCalvi/fs0722b-Riccardo-Calvi/main/m2/w7/d5/api/users.json";
var requestOptions = { method: "GET", redirect: "follow" };
let utenti = [];
let cardContainer = document.getElementById("card-container");
let userCard = ``;

utenti = [
  {
    username: "john",
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    profileURL: "img/male.png",
    email: "john.doe@example.com",
  },
  {
    username: "jane",
    firstName: "Jane",
    lastName: "Doe",
    gender: "Female",
    profileURL: "img/female.png",
    email: "jane.doe@example.com",
  },
];

function giraUtente() {
  utenti.forEach((element) => {
    cardUtente(element);
    console.log(element);
  });
}




function aggiustaLinkImg(utente) {
  if (utente.gender == "Male") {
    utente.profileURL = "../img/male.png"
  } else {
    utente.profileURL = "../img/famale.png"
  }
}

let creaCard = (utente) => {

  aggiustaLinkImg(utente)

  let card = document.createElement("div");
  card.className = "card shadow cursor-pointer";
  card.style = "width: 18rem;"

  let img = document.createElement("img");
  img.src = utente.profileURL
  img.className = "card-img-top"

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let title = document.createElement("h5");
  title.innerText = utente.firstName;
  title.className = "card-title";

  let color = document.createElement("div");
  color.innerText = utente.lastName;
  color.className = "card-color";

  cardBody.appendChild(img);
  cardBody.appendChild(title);
  cardBody.appendChild(color);
  card.appendChild(cardBody);
  cardContainer.appendChild(card);
};

function giraUtente() {
  utenti.forEach(utente => {
    creaCard(utente)
  });
}

giraUtente()

// async function getUser() {
// 	const response = await fetch(url, requestOptions);
// 	return response.json(); // Extracting data as a JSON Object from the response

// }

// async function writeUser() {
//   let prom = getUser()
//   prom.then((res) => {
//     res.forEach(element => {
//       utenti.push(element)
//     });
//   })
// }

// writeUser()
// console.log(utenti)
