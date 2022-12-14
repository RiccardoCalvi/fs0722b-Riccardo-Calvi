/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

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

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
function esA() {
  let sum = 10 + 20;
  return sum;
}

// console.log(esA())

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

function esB() {
  return random(0, 20);
}

// console.log(esB())

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
function esC() {
  let me = {
    name: "Riccardo",
    surname: "Calvi",
    age: 21,
  };
  return me;
}

// console.log(esC())

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

function esD(ogg = {}) {
  delete ogg.age;
  return ogg;
}

// console.log(esD(esC()))

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

function esE(ogg = {}) {
  ogg.skills = ["HTML", "CSS", "JS", "GIT", "PHP"];
  return ogg;
}

// console.log(esE(esC()))

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

function esF(ogg = {}) {
  ogg.skills.push("VS Code");
  return ogg;
}

// console.log(esF(esE(esC())))

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

function esG(ogg = {}) {
  ogg.skills.pop();
  return ogg;
}

// console.log(esG(esF(esE(esC()))))

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  return random(1, 6); // Richiamo la funzione random che si trova alla fine del file e gli passo 2 valori => il primo è il valore minimo e il secondo è il valore massimo
}

// console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(num1, num2) {
  return num1 > num2 ? num1 : num2; // tramite una IF controllo se il primo parametro (num1) è maggiore del secondo (num2) se è così ritorno il primo parametro alternativamente ritorno il secondo parametro
}

// console.log(whoIsBigger(40, 50));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str = "") {
  return str.split(" "); //richiamo la funzione split con parametro " " si occuperà di cercare gli spazzi nella stringa e li userà per suddividere la stringa
}

// console.log(splitMe("CIAO COME STAI"))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str = "", bool = true) {
  if (bool) {
    return str.slice(1); //richiamo la funzione slice con parametro di index = 1 così da rimuovere il primo valore (carattere) dalla stringa
  } else {
    return str.slice(0, -1); //richiamo la funzione slice con parametro di index = 0 e paramentro di end = -1 così da rimuovere l'ultimo valore (carattere) dalla stringa
  }
}

// console.log(deleteOne("CIAO come stai"))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(str) {
  return str.replace(/[0-9]/g, ""); //richiamo la funzione replace che tramite regex sostituisce i valori numerici con dei valori vuoti
}

// console.log(onlyLetters("I have 4 dogs"))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(str = "") {
  return str.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) // Controlla se nella stringa sia valida (tramite funzione Match) la regex (presa da Stack Overflow) sia valida
    ? true // se è valida ritorna TRUE
    : false; // se NON è valida ritorna FALSE
}

// console.log(isThisAnEmail("rica@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  return new Date().getDay(); // istanzio tramite costruttore una nuova data alla quale chiedo tramite la funzione .getDay() il numero del giorno della settimana
}

// console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(num = 0) {
  let out = {
    // Istanzio un oggetto chiamato OUT
    values: [],
    sum: 0,
  };

  for (let i = 0; i < num; i++) {
    // Avvio un cliclo For che ciclerà num volte  (num è il paramentro passato)
    let n = dice(); // ottengo il valore numerico dalla funzione dice() e lo salvo nella variabile locale n
    out.values.push(n); // effettuo un .push() di n sull'array values dell'oggetto
    out.sum += n; // sommo il valore n con i precedenti/successivi e lo salvo in sum dell'oggetto
  }

  return out;
}

// console.log(rollTheDices(6));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(data) {
  let data1 = new Date(); // Ottengo la data odierna
  let data2 = new Date(data); // Ottengo la data passando come parametro la data impostata nel console.log
  return parseInt((data1 - data2) / (1000 * 60 * 60 * 24), 10); // Trasformo le data in numeri interi e li divido per l'espressione
}

// console.log("Sono passati " + howManyDays("2001-04-12") + " Giorni")

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  return `${new Date().getDate()} ${new Date().getMonth()}` == "12 03" // Ottengo il giorno e il mese corrente e lo incapsulo dentro una stringa che poi viene messa a confronto con la mia data di nascita ovvero il 12 aprile e se è valida ritorna true alternativamente false
    ? true
    : false;
}

// console.log(isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri;
  deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
let topolino = {
  // Creo l'oggetto topolino
  nome: "mickey",
  cognome: "mouse",
};
function deleteProp(ogg = {}, daEliminare) {
  delete ogg[daEliminare]; // Elimino la proprietà (tramite delete) indicata nel console.log come secondo paramentro
  return ogg;
}

// console.log(deleteProp(topolino, "cognome"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie() {
  let out = movies[0]; //definisco out come il primo film dell'array di oggetti
  for (const film of movies) {
    // avvio un ciclo for su tutto l'arrat
    if (film.Year > out.Year) {
      // controllo se l'anno di uscita del film preso dal ciclo è maggiore dell'anno della variabile out
      out = film; // se si verifica la condizione sostituisco il film
    }
  }
  return out;
}

// console.log(newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies() {
  return movies.length;
}

// console.log(countMovies())

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears() {
  let out = [];
  for (const film of movies) {
    // Avvio un cliclo for su tutti i film
    out.push(film.Year); // Aggiungo all'array out l'anno del film preso dal ciclo
  }
  return out;
}

// console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium() {
  out = [];
  for (const film of movies) {
    // Avvio un cliclo for su tutti i film
    if (film.Year < 2000) {
      // Controllo se l'anno di produzione del film sia inferiore al 2000
      out.push(film); // Se si verifica la condizione effettuo un .push del film
    }
  }
  return out;
}

// console.log(onlyInLastMillennium())

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears() {
  out = 0;
  for (const film of movies) {
    // Avvio un cliclo for su tutti i film
    out += parseInt(film.Year); // Converto le date in numeri interi e li sommo
  }
  return out;
}

// console.log(sumAllTheYears())

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(titolo = "") {
  let out = [];
  for (const film of movies) {
    // Avvio un cliclo for su tutti i film
    if (film.Title.toLowerCase().match(titolo.toLowerCase())) {
      // Trasformo il titolo del film e la stringa passata in caratteri minuscoli, tramite la funzione .match sul titolo del film, preso dal ciclo, controllo se il parametro è contenuto nel titolo
      out.push(film); // se la condizione si verifica effettuo un .push del film
    }
  }
  return out;
}

// console.log(searchByTitle("Avengers"))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(titolo = "") {
  let out = {
    match: [],
    unmatch: [],
  };
  for (const film of movies) {
    // Avvio un cliclo for su tutti i film
    if (film.Title.toLowerCase().match(titolo.toLowerCase())) {
      // Trasformo il titolo del film e la stringa passata in caratteri minuscoli, tramite la funzione .match sul titolo del film, preso dal ciclo, controllo se il parametro è contenuto nel titolo
      out.match.push(film); // se la condizione si verifica effettuo un .push del film
    } else {
      out.unmatch.push(film); // se la condizione NON si verifica effettuo un .push sul vettore unmatch del film
    }
  }
  return out;
}

// console.log(searchAndDivide("Avengers"))

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(index = 0) {
  movies.splice(index, 1); // Rimuovo l'elemento indicato tramite il parametro index grazie alla funzione .splice, al primo paramentro indico l'index e al secondo quanti elementi rimuovere
  return movies;
}

// console.log(removeIndex(2))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function es20(id = "") {
  document.getElementById(id); // seleziono tutti gli elementi tramite l'ID dato dal paramento
}

// es20("container")

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function es21() {
  let td = document.querySelectorAll("td"); // dichiaro td con tutti gli elementi TD
  for (const t of td) {
    // Avvio un ciclo per stampare tutti i TD
    console.log(t);
  }
}

// console.log(es21());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function es22() {
  let td = document.querySelectorAll("td"); // dichiaro td con tutti gli elementi TD
  for (const t of td) {
    // Avvio un ciclo per stampare tutti i testi dei TD
    console.log(t.innerHTML);
  }
}

// console.log(es22());

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function es23() {
  let a = document.querySelectorAll("a"); // dichiaro a con tutti i tag a
  for (const link of a) {
    // Avvio un ciclo per impostare il colore di background a rosso
    link.style.background = "red";
  }
}
// es23();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function es24() {
  let li = document.createElement("li"); // Dichiaro li
  li.appendChild(document.createTextNode("5")); // Aggiungo il testo al li appena creato
  document.getElementById("myList").appendChild(li); // aggiungo il li appena creato alla lista ul
}
// es24()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function es25() {
  let lista = document.getElementById("myList"); // Dichiaro Lista con il selettore ad ID
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild); // Avvio un ciclo While finche è presente il primo figlio... rimuovi il primo figlio :)
  }
}
// es25();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function es26() {
  const tr = document.querySelectorAll("tr"); // Dichiaro tr con tutti i tag tr

  for (const row of tr) {
    // Avvio un cliclo for per aggiungere la classe test
    row.classList.add("test");
  }
}

// es26();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

// function halfTree(h = 1) {

//   for (let i = 0; i < h; i++) {
//     console.log("*")

//   }

// }

// halfTree(5)

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function es29(n) {
  let primo = true;
  if (n === 1) {
    // controlla se il numero è uguale a 1
    console.log("Il numero è 1");
  } else if (n > 1) {
    // Controlla se il numero è maggiore

    for (let i = 2; i < n; i++) {
      // Avvio il ciclo partendo da 2
      if (n % i == 0) {
        // Se modulo di n con il numero del ciclo è uguale a 0 non è primo
        return false;
      }
    }
    return primo ? true : false; // Ritorna il risultato
  }
}

console.log(es29(10));

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
