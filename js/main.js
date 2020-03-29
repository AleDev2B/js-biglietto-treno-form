// memorizzare nome del passeggero, Km & fascia età in una variabile
var UserName, KmUser, Eta, ButtonGen, ButtonNull;

// quando l'utente clicca su genera memorizza il valore in una variabile
var ButtonGen = document.getElementById("buttongen");

// aggiungi la funzione di ascolto al click del bottone ed associa i valori presi dalle variabili associate agli input dei diversi campi (nome, Km della destinazione & sconti in base all'età)
ButtonGen.addEventListener("click", function(){

  var UserName = document.getElementById('InputName');
  var InputName = UserName.value
  console.log(InputName);

  var KmUser = document.getElementById("InputKm");
  var FinalDest = parseInt(KmUser.value);
  console.log(FinalDest);


  var Eta = document.getElementById("InputTicketSel");
  var Age = Eta.value;
  console.log(Age);

  var Offer = "Tariffa Standard"
  var KmAvPrice = 0.21;

  if (Age == "Carta Verde") {

    var NormalTicket = Math.round(KmAvPrice * FinalDest * 0.80);
    console.log(NormalTicket);
    Offer = "Tariffa: Viaggiatore Abituale"
  } else if (Age == "Carta Argento") {
    var NormalTicket = Math.round(KmAvPrice * FinalDest * 0.60);
    Offer = "Tariffa: Over 65"
  } else {
    var NormalTicket = Math.round(KmAvPrice * FinalDest);
  }

  var Carrozza = Math.floor(Math.random() * 10);
  var Cp = Math.floor(Math.random() * 10000);

  document.getElementById("user_name").innerHTML = InputName;

  document.getElementById("IdPrenotation").innerHTML = Cp;

  document.getElementById("IdCarrozza").innerHTML = Carrozza;

  document.getElementById("TicketType").innerHTML = Offer;

  document.getElementById("TicketPrice").innerHTML = NormalTicket;

  console.log(NormalTicket);
  var ShowBox = document.getElementById("Box_basso");
  ShowBox.classList.add("show");
  ShowBox.classList.remove("hidden");

}
);

var ButtonNull = document.getElementById("buttonnull");

ButtonNull.addEventListener("click", function() {
  document.getElementById("user_name").innerHTML = "";

  document.getElementById("IdPrenotation").innerHTML = "";

  document.getElementById("IdCarrozza").innerHTML = "";

  document.getElementById("TicketType").innerHTML = "";

  document.getElementById('InputName').value = "";

  document.getElementById("InputKm").value = "";

  document.getElementById("InputTicketSel").value = "";

  var ShowBox = document.getElementById("Box_basso");
  ShowBox.classList.add("hidden");
  ShowBox.classList.remove("show");
} );
