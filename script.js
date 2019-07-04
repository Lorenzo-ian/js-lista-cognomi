//Creo le varie variabili
var utente, position;

//Creo una lista
var cognomi = [
    "rossi",
    "dalla",
    "mercury",
    "lennon",
    "gogh",
    "rose"
]

//chiedo il cognome all'utente
utente = prompt("Qual è il tuo cognome?")

//inserisco tramite push nuovo cognome in lista
cognomi.push(utente);

//ordino i cognomi alfabeticamente
cognomi.sort();

//creo la lista
var contenuto;
for (var i = 0; i < cognomi.length; i++) {

    contenuto = document.getElementById('mio_id').innerHTML;

    document.getElementById('mio_id').innerHTML = contenuto + "<li>" +  cognomi[i] + "</li>";
}

//Stampo il posizionamento dell'utente nella lista
position = parseInt(cognomi.indexOf(utente)) + 1;
document.getElementById("numero").innerHTML = "Il tuo cognome è al numero: " + position;

