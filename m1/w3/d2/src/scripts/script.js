/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function es1(str1 = "bella", str2 = "prova") {
  return (
    str1.slice(0, 2).toUpperCase() +
    str2.slice(str2.length - 3, str2.length).toUpperCase()
  );
}

// console.log(es1("ciao", "marco"));

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */
function es2() {
  let out = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      out.push(i);
    }
  }
  return out;
}
// console.log(es2());

/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */

function es3() {
  let out = [];
  for (let i = 0; i < 100; i++) {
    if (i % 5 === 0) {
      out.push(i);
    }
  }
  return out;
}
// console.log(es3());

/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

function es4() {
  let out = [];
  for (let i = 0; i < 10; i++) {
    out.push(random(0, 100));
  }
  return out;
}

// console.log(es4());

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

function es5(arr = []) {
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      out.push(arr[i]);
    }
  }
  return out;
}
// console.log(es5(es4()))

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */

function es6(arr = []) {
  let out = 0;
  for (let i = 0; i < arr.length; i++) {
    out = out + arr[i];
  }
  return out;
}
// console.log(es6(es4()))

/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/

function es7(arr = []) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
  }
  return arr;
}
// console.log(es7(es4()))

/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
function es8(arr = []) {
  out = [];
  for (let i = 0; i < arr.length; i++) {
    out.push(arr[i].length);
  }
  return out;
}

// console.log(es8(["epicode", "is", "great"]))

/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/

function es9(arr = []) {
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      out.push(arr[i]);
    }
  }
  return out;
}
// console.log(es9(es4()));












/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

const createRandomWithoutDuplicate = function () {
  //Dichiarazione funzione

  let array = []; //Dichiarato array vuoto
  for (let i = 0; i < 10; i++) { // Cliclo FOR per scorrere elemento per elemento (10)
  
    let added = false                                     //per rimanare nel ciclo WHILE nel caso l'IF viene verificato
    while (!added) {                                      // condizione per il while che fa ripetere il ciclo finche non viene inserito un elemento
      let numberToAdd = Math.ceil(Math.random() * 10)     //in questo passaggio viene inserita una variabile random tra 1 e 100
      if (!array.includes(numberToAdd)) {                 // va a controllare se nell'array non è presente il numero appena inserito nella variabile "numberToAdd"
        array.push(numberToAdd)                           // se non è presente va ad eseguire un .push() del numero generato
        added = true                                      // in questo modo esce dal ciclo quando un elemento viene aggiunto all'array e ripete il ciclo for
      }
    }
  }
  return array
}

console.log(createRandomWithoutDuplicate())

/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

function es11(arr = []) {
  console.log("Prima: " + arr);
  return arr.reverse();
}

// console.log("Dopo: " + es11(es4()))

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function es12() {
  let out = 9999;
  for (let i = 0; i < movies.length; i++) {
    let film = parseInt(movies[i].Year);
    out = film < out ? (out = film) : out;
  }
  return out;
}

// console.log("Il film più vecchio è del: " + es12());

/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function es13() {
  return (out = movies.length);
}

// console.log(es13())

/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function es14() {
  let out = [];
  for (let i = 0; i < movies.length; i++) {
    const film = movies[i].Title;
    out.push(film);
  }
  return out;
}

// console.log(es14())

/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function es15() {
  let out = [];
  for (let i = 0; i < movies.length; i++) {
    const film = movies[i];
    if (film.Year >= 2000) {
      out.push(film);
    }
  }
  return out;
}

// console.log(es15());

/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function es16(id = "") {
  let out;
  for (let i = 0; i < movies.length; i++) {
    const film = movies[i];
    if (film.imdbID == id) {
      return film;
    }
  }
}

// console.log(es16("tt0167261"))

/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

// function es17(params) {

// }

/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
function es18(key = "") {
  let out = [];
  for (let i = 0; i < movies.length; i++) {
    const film = movies[i].Title;
    if (film.includes(key)) {
      out.push(film);
    }
  }
  return out;
}

// console.log(es18("Avengers"))

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
