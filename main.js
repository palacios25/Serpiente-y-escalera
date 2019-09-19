import Jugador from "./Jugador.js";

let ganador = document.querySelector("#ganador");
let btn = document.querySelector("#btn");
btn.addEventListener("click", win);
let jugador1 = new Jugador("1");
let jugador2 = new Jugador("2");

let casillas = new Array (100);
casillas.fill(" ");
casillas[1] = 1;
casillas[7] = 1;
casillas[13] = 1;
casillas[22] = 1;
casillas[31] = 1;
casillas[47] = 1;
casillas[55] = 1;
casillas[62] = 1;

casillas[25] = 0;
casillas[36] = 0;
casillas[45] = 0;
casillas[54] = 0;
casillas[67] = 0;
casillas[71] = 0;
casillas[87] = 0;
casillas[94] = 0;


function win(){
    ganador.textContent = jugar();
}

function jugar(){
    let win1 = " El ganador es: Jugador 1";
    let win2 = " EL ganador es: Jugador 2";
    let i = 0;

    do{
        jugador1.avanzar();
        jugador2.avanzar();
        imprimir(i);
        i++;
    }while(jugador1.posicion < 0 && jugador2.posicion < 0);

    
    if (casillas[jugador1.posicion] === 1) {
        jugador1.escalera();
        console.log("El jugador 1 se encontro con una ayuda, subio a la posicion: " + jugador1.posicion);            
    }
    if (casillas[jugador1.posicion] === 0) {
        jugador1.serpiente();
        console.log("El jugador 1 encontro una serpiente, bajo a la posicion: " + jugador1.posicion);
    }
    if (casillas[jugador2.posicion] === 1) {
        jugador2.escalera();
        console.log("El jugador 2 se encontro con una ayuda, subio a la posicion: " + jugador2.posicion);            
    }
    if (casillas[jugador2.posicion] === 0) {
        jugador2.serpiente();
        console.log("El jugador 2 se encontro con una serpiente, bajo a la posicion: " + jugador2.posicion);
    }

    if(jugador1.posicion >= 100){
        newPosition();
        return win1;
    }else if (jugador2.posicion >= 100) {
        newPosition();
        return win2;
    }
}

function newPosition(){
    jugador1.posicion = 0;
    jugador2.posicion = 0;
}

function imprimir(){

    document.querySelector("#p1").innerHTML = jugador1.posicion;
    document.querySelector("#p2").innerHTML = jugador2.posicion;
}