class Pokemon {  // comenzamos con class: para hacer el objeto
    // atributos
    #name = ""; // con el # atributo es privado
    #type = "";
    #evolutions = [];
    // constructor
    constructor(name, type, evolutions) { // constructor :nos sirve para rellenar nuestro objeto
        this.#name = name; // name : son de los atributos que declaramos al principio
        this.#type = type;
        this.#evolutions = evolutions;
    }
    // set: modifica elementos y no los retorna
    set name(value) { // set palabra reservada . NAME: nombre asignado sin el #.VALUE : valor q es evaluar
        this.#name =value;
    }

    set type(value) {
        this.#type = value;
    }

    set evolutions(value) {
        this.#evolutions = value;
    }
    // get:consulta atributos y retorna
    get name() {
        return this.#name;
    }
    get type () {
        return this.#type
    }
    get evolutions () {
        return this.#evolutions
    }


    // metodo
    attack() {
        return `${this.#name}, esta atacando`;
    }
    // metodo
    evolve(evolution = 0) { // =  : es  un parametro opcional
        const EVOLVE = this.#evolutions[evolution] || "";
        let message = "no puedo evolucionar";

        if (EVOLVE) {
            message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE;
        }

        return message;
    }

}

const charmander = new Pokemon('charmander', 'fuego', ['charmaleon', 'charizad']);
const Squirtle = new Pokemon("Squirtle", "agua", ["Wartortle", "Blastoise"]);

console.log(charmander.name);
console.log(charmander.attack());
console.log(charmander.evolve());
console.log(charmander.attack());
console.log(charmander.name);