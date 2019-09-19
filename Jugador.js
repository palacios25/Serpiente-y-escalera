export default class Jugador{
    constructor(nombre){
        this._nombre = nombre;
        this.posicion = 0;

    }
    get nombre(){
        return this._nombre;
    }
    avanzar(){
        let cara =  Math.floor(Math.random() * 6) + 1;
        if (cara === 1){
            this.posicion ++;
        } else if (cara === 2){
            this.posicion += 2;
        } else if (cara === 3){
            this.posicion += 3;
        } else if (cara === 4){
            this.posicion += 4;
        } else if (cara === 5){
            this.posicion += 5;
        } else if (cara === 6){
            this.posicion += 6;
        } 
        return this.posicion;
    }

    serpiente(){
        let cara = Math.floor(Math.random() * 6) + 1;
        this.posicion = (this.posicion - cara) - cara;
        return this.posicion;
    }

    escalera(){
        let cara = Math.floor(Math.random() * 6) + 1;
        this.posicion = (this.posicion + cara) + cara;
        return this.posicion;
    }
}
