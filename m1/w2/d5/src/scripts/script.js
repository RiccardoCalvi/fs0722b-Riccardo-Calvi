var display = document.getElementById("display")

function aggiungiCifra(bottone) {
  display.value += bottone.getAttribute("data-simbolo");
}

function tot() {
  let numeri = display;
  numeri.value = eval(numeri.value);
}

function cancella() {
  display.value = display.value.substr(0, display.value.length - 1);
}

function reset() {
  display.value = "";
}
