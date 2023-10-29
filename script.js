const container=document.querySelector('.container');
const anzahl=document.getElementById('anzahl');
const betrag=document.getElementById('betrag');
const ausweahlen=document.getElementById('film');

container.addEventListener('click',function(e){
    if(e.target.classList.contains('sitz') && !e.target.classList.contains('reserviert')){
        e.target.classList.toggle('ausgewaehlt');
        berechnen();
    }
})

ausweahlen.addEventListener('change',function(){
    berechnen();
})

function berechnen(){
    let ausgewaehlteSitzAnzahl=container.querySelectorAll('.sitz.ausgewaehlt').length;
    let preis=ausweahlen.value;
    anzahl.innerText=ausgewaehlteSitzAnzahl;
    betrag.innerText=ausgewaehlteSitzAnzahl*preis;
}