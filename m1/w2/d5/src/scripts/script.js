function aggiungiCifra(bottone){

  document.getElementById("display").value += bottone.getAttribute('data-simbolo');

}

function tot(){
  let numeri = document.getElementById("numeri");
  numeri.value = eval(numeri.value);
}