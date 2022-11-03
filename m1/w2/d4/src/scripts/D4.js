const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/
let characters = [];

/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
function es2() {
  for (let i = 0; i < starWarsCharacters.length; i++) {
    let name = starWarsCharacters[i].name;
    characters.push(name);
  }
  console.log(characters);
}

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci un oggetto con questa struttura: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/
var femaleCharacters = [];
function es3() {
  let leia = {
    name: "Leia Organa",
    hair_color: "brown",
    eye_color: "brown",
  };
  femaleCharacters.push(leia);
  console.log(femaleCharacters);
}

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, blue-gray.
  ognuna di queste proprietà contiene un array vuoto
*/
var eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  blue_gray: [],
};

/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato
  Utilizza uno switch statement per determinare in quale proprietà inserire il personaggio
  */
function es5() {
  for (let i = 0; i < starWarsCharacters.length; i++) {
    let elemento = starWarsCharacters[i]
    switch (elemento.eye_color) {
      case "blue":
        eyeColor.blue.push(elemento)
        break
      case "yellow":
        eyeColor.yellow.push(elemento)
        break
      case "brown":
        eyeColor.brown.push(elemento)
        break
      case "red":
        eyeColor.red.push(elemento)
        break
      case "blue_gray":
        eyeColor.blue_gray.push(elemento)
        break
      default:
        break;
    }
  }
console.log(eyeColor)
}

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
  */
var massCharacters = 0;
function es6() {
  let i = 0
  while(i < starWarsCharacters.length){
    massCharacters += parseInt(starWarsCharacters[i].mass);
    i++
  }
  console.log("La massa totale è di: " + massCharacters);
}

/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
function es7() {
  let massaTot = massCharacters;
  console.log("LA MASSA È: " + massCharacters);
  switch (true) {
    case massaTot < 500:
      console.log("Ship is under loaded");
      break;
    case massaTot == 500:
      console.log("Ship is half loaded");
      break;
    case massaTot > 700 && massaTot < 900:
      console.log("Warning: Load is over 700");
      break;
    case massaTot > 900 && massaTot < 1000:
      console.log("Critical Load: Over 900");
      break;
    case massaTot >= 1000:
      console.log("DANGER! OVERLOAD ALERT: Jump ship now!");
      break;
  }
}

/* ESERCIZIO 8
Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
*/
function es8() {
  for (let i = 0; i < starWarsCharacters.length; i++) {
    let element = starWarsCharacters[i];
    if (element.gender == "n/a") {
      element.gender = "robot";
    }
    console.log(starWarsCharacters[i].gender);
  }
}

/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno più for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)

Una volta fatto crea un conosle.log per controllare la proprietà length di "characters" prima e dopo l'operazione
*/
function es9() {
  for (let i = 0; i < femaleCharacters.length; i++) {
    let element = femaleCharacters[i];
    // console.log(element)
    for (let x = 0; x < characters.length; x++) {
      let personaggio = characters[x];
      console.log(element.name);
      if (personaggio.name == element.name) {
        characters.splice(x, 0, "");
      }
      // console.log(personaggio)
    }
  }
}

/* EXTRA ESERCIZIO 10
Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo
*/
function es10() {
  let randomNumber = random(0, starWarsCharacters.length);
  let element = starWarsCharacters[randomNumber];
  console.log(
    `Il personaggio di Star Wars si chiama: ${element.name} è alto ${element.height}cm e pesa ${element.mass}kg è un ${element.gender}. È nato nel ${element.birth_year} ed i suoi capelli sono ${element.hair_color} ed i suoi occhi sono ${element.eye_color}.`
  );
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// ESEGUZIONE FUNZIONI
// es2();
// es3();
// es5();
// es6();
// es7();
// es8();
// es9();
// es10()
