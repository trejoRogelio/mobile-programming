const BASE_URL = new URL('https://pokeapi.co/api/v2/');

export async function getPokemonByName(name) {
    const URI = new URL(`pokemon/${name}`, BASE_URL);
    const resp = await fetch(URI.href);

   

    return resp.json();
}

export async function getPokemonById(id) {
    const URI = new URL(`pokemon/${id}`, BASE_URL);
    const resp = await fetch(URI.href);

    if (!resp.ok) {
        return Promise.reject(resp.json());
    }

    const pokemonData = await resp.json();
    const name = pokemonData.name;
    const type = pokemonData.types[0].type.name;
    const moves = pokemonData.moves.slice(0, 4).map(move => move.move.name);
    const gameVersions = pokemonData.game_indices.map(index => index.version.name);
    const stats = {};
    pokemonData.stats.forEach(stat => {
        stats[stat.stat.name] = stat.base_stat;
    });
    const shinySpriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;

    return { name, type, moves, gameVersions, shinySpriteURL, stats };
}


export async function getAllPokemon() {
    const URI = new URL('pokemon?limit=26', BASE_URL);
    const resp = await fetch(URI.href);

    if (!resp.ok) {
        return Promise.reject(resp.json());
    }

    const pokemonList = await resp.json();
    return pokemonList.results;
}