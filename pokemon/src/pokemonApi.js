const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

const storageKey = "MY_POKEMONS";

function getFromStorage() {
    const fromStorage = localStorage.getItem(storageKey);
    return fromStorage ? JSON.parse(fromStorage) : [];
}

function getAllPokemons() {
    return P.getPokemonsList();
}

function getMyPokemons() {
    return new Promise(resolve => {
        resolve(getFromStorage());
    });
}

function addMyPokemon(pokemon) {
    return new Promise(resolve => {
        const items = getFromStorage();

        var index = items.findIndex(x => x.name === pokemon.name)
        if (index === -1){
            items.push(pokemon);
        }

        localStorage.setItem(storageKey, JSON.stringify(items));
        resolve(index);
    });
}

function removeMyPokemon(pokemon) {
    return new Promise(resolve => {
        const items = getFromStorage();

        var filteredItems = items.filter(x => x.name !== pokemon.name)

        localStorage.setItem(storageKey, JSON.stringify(filteredItems));
        resolve();
    });
}

function getPokemon(pokemon) {
    return P.resource(pokemon.url);
}

export default { getAllPokemons, getMyPokemons, addMyPokemon, getPokemon, removeMyPokemon };
