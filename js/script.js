let chilometri = document.getElementById("chilometri").value;
let eta = document.getElementById("eta").value;
chilometri = Number(chilometri);
eta = Number(eta);
let prezzoPerKm = 0.21;
let prezzoTotale = chilometri * prezzoPerKm;
function calcolaPrezzo() {
    chilometri = Number(document.getElementById("chilometri").value);
    eta = Number(document.getElementById("eta").value);
    prezzoTotale = chilometri * prezzoPerKm;

    if (eta < 18) {
        prezzoTotale *= 0.8;
    } else if (eta > 65) {
        prezzoTotale *= 0.6;
    }

    prezzoTotale = prezzoTotale.toFixed(2);
    document.getElementById("risultato").innerText = `Il prezzo finale del biglietto è €${prezzoTotale}`;
}
function resetForm() {
    document.getElementById("risultato").innerText = "";
}
document.getElementById("ticketForm").onsubmit = function(event) {
    event.preventDefault();
    calcolaPrezzo();
};

document.getElementById("ticketForm").onreset = function() {
    resetForm();
};