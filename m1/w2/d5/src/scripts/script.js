var display = document.getElementById("display");

function aggiungiCifra(bottone) {
  display.value += bottone.getAttribute("data-simbolo");

  let controllo = display.value.slice(-2);
  switch (controllo) {
    case "++":
      cancella();
      break;
    case "--":
      cancella();
      break;
    case "**":
      cancella();
      break;
    case "//":
      cancella();
      break;

    case "+-":
      cancella();
      break;
    case "+*":
      cancella();
      break;
    case "+/":
      cancella();
      break;

    case "-+":
      cancella();
      break;
    case "-*":
      cancella();
      break;
    case "-/":
      cancella();
      break;

    case "*+":
      cancella();
      break;
    case "*-":
      cancella();
      break;
    case "*/":
      cancella();
      break;

    case "/+":
      cancella();
      break;
    case "/-":
      cancella();
      break;
    case "/*":
      cancella();
      break;

    default:
      break;
  }
}

function tot() {
  display.value = eval(display.value);
}

function cancella() {
  display.value = display.value.substr(0, display.value.length - 1);
}

function reset() {
  display.value = "";
}
