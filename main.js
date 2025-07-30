// 🏆 Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function sommaDichiarativa(num1,num2){
    return num1 + num2
}
// console.log(sommaDichiarativa(5,7))
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const sommaVariabile = function (num1,num2) {
    return num1+num2
}
// console.log(sommaVariabile(5,5));

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.+
const sommaArrow = (num1,num2) =>{return num1 + num2}

// console.log(sommaArrow(10,10));



// 🏆 Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
const square= (num) =>num*num

// console.log(square(3));


// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

function quadrato (num){return num *num}

// console.log(quadrato(9));


// 🏆 Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
function eseguOperazione(num1,num2,operatore){
    return  operatore(num1,num2);
}
function somma (primo,secondo){
    return primo + secondo
}
function moltiplica (primo,secondo){return primo * secondo}
// console.log(eseguOperazione(3,9,somma));
// console.log(eseguOperazione(3,10,moltiplica));

// 🏆 Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
function creaTimer(ms){return function(){setTimeout(function(){console.log("Tempo Scaduto!");},ms)}}

// creaTimer(2000)()
// 🏆 Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.


function stampaOgniSecondo (sec){
    
    const timeCheck = setInterval(function(){
        if (sec > 0)
            {console.log(`Mancano ancora ${sec} secondi`);
        sec--;}
        else 
            {clearInterval(timeCheck);
                console.log("Tempo Scaduto!");
                
            }
        },1000)
    }

    // stampaOgniSecondo(5)
    
    // 🏆 Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
  function creaContatoreAutomatico (ms){
    let contatore = 0
    return(function(){setInterval(function(){
        contatore++;
        console.log(contatore);
    },ms)})
}

// creaContatoreAutomatico(3000)()



// 🏆 Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(message,goSec,stopSec){
    const timer = setInterval(
        function () {
        
            if (goSec < stopSec) {
                goSec ++;
                console.log("messaggio",message)   
                console.log("go",goSec);
                console.log("stop",stopSec);
                
                
            }
            else{ clearInterval(timer)}
        },1000)
}

eseguiEferma("hello world",0,5)

// 🎯 Snack 8 (Bonus)
// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
// Esempio di utilizzo:
// contoAllaRovescia(5)
// Output atteso:
// 5
// 4
// 3
// 2
// 1
// Tempo scaduto!
// 🎯 Snack 9 (Bonus)
// Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
// Esempio di utilizzo:
// sequenzaOperazioni([
//   () => console.log("Operazione 1"),
//   () => console.log("Operazione 2"),
//   () => console.log("Operazione 3")
// ], 2000);
// Output atteso:
// Operazione 1
// Operazione 2
// Operazione 3
// 🎯 Snack 10 (Bonus)
// Creare un throttler per limitare l’esecuzione di una funzione
// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
// Esempio di utilizzo:
// const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);
// ​
// throttledLog(); // ✅ "Eseguito!"
// throttledLog(); // ❌ Ignorato (chiamato troppo presto)
// setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)
// ​
