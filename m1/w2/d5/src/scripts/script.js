function aggiungiCifra(bottone){

  document.getElementById("display").value += bottone.getAttribute('data-simbolo');

}

function tot(){
  let numeri = document.getElementById("display");
  numeri.value = eval(numeri.value);
}