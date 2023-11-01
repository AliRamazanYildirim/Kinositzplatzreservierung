const container=document.querySelector('.container');
const anzahl=document.getElementById('anzahl');
const betrag=document.getElementById('betrag');
const ausweahlen=document.getElementById('film');
const sitze=document.querySelectorAll('.sitz:not(.reserviert)');

abrufenAusLokalSpeicher();
berechnen();
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
    const ausgewaehlteSitze=container.querySelectorAll('.sitz.ausgewaehlt');

    const ausgewaehlteSitzeArr=[];
    const sitzeArr=[];
    ausgewaehlteSitze.forEach(function(sitz){
        ausgewaehlteSitzeArr.push(sitz);
    });

    sitze.forEach(function(sitz){
        sitzeArr.push(sitz);
    })

    let ausgewaehlteSitzeIndexe=ausgewaehlteSitzeArr.map(function(sitz){
        return sitzeArr.indexOf(sitz);
    });

    let ausgewaehlteSitzAnzahl=ausgewaehlteSitze.length;
    anzahl.innerText=ausgewaehlteSitzAnzahl;
    betrag.innerText=ausgewaehlteSitzAnzahl*ausweahlen.value;

    speichernImLokalenSpeicher(ausgewaehlteSitzeIndexe);
}
function abrufenAusLokalSpeicher(){
    const  ausgewaehlteSitze=JSON.parse(localStorage.getItem('ausgewaehlteSitze'));

    if(ausgewaehlteSitze!=null && ausgewaehlteSitze.length>0){
        sitze.forEach(function(sitz,index){
            if(ausgewaehlteSitze.indexOf(index)>-1){
                sitz.classList.add('ausgewaehlt');
            }
        });
    }

    const ausgewaehlteFilmIndex=localStorage.getItem('ausgewaehlteFilmIndex');

    if(ausgewaehlteFilmIndex!=null){
        ausweahlen.selectedIndex=ausgewaehlteFilmIndex;
    }
}

function speichernImLokalenSpeicher(indexe){
    localStorage.setItem('ausgewaehlteSitze',JSON.stringify(indexe));
    localStorage.setItem('ausgewaehlteFilmIndex',ausweahlen.selectedIndex);//Ausgewähltes Film*
}