class Pokedex {

    getinfo(name) { // getinfo: metodo declarando 
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
        .then(data => data.json())
        .then(data => {
            
            const [DATA = null] = data;
            const MESSAGE = DATA || `el pokemon ${name} no existe`;

            console.log(MESSAGE);
        })
    }
}

const POKEDEX = new Pokedex(); // instanciamos en un objeto
POKEDEX.getinfo('charmander')


/*
// DESESTRUCTURACION :
            // arreglo
const lista = ['dragon ball', 'code geas','sailor moon'];
// sacar elementos de un arreglo y declararlos en una constante
const [, anime2 , anime3]= listas; // solo ponemos los elementos que queremos y los demas en una coma,
console.log(anime2, anime3); // imprimimos solo los animes q pedimos anteriormente
*/