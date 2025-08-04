class Reloj {

    #numeroSerie;
    marca;
    color;

    constructor(marca, color, numeroSerie) {
        this.marca = marca;
        this.color = color;
        this.#numeroSerie = numeroSerie;
    }

    verDatos() {
        console.log("Marca: " + this.marca);
        console.log("Color: " + this.color);
        console.log("Numero de serie: " + this.#numeroSerie);
    }
  
    decirHora = () => {
        let hora = new Date();
        console.log("En este reloj son las: " + hora.getHours() + ":" + hora.getMinutes());
    }
}


let miReloj = new Reloj("Casio", "Negro", "123ABC");
let otroReloj = new Reloj("Citizen", "Plateado", "456DEF");


console.log("=== Mi primer reloj ===");
miReloj.verDatos();
miReloj.decirHora();

console.log("\n=== Mi segundo reloj ===");
otroReloj.verDatos();
otroReloj.decirHora();