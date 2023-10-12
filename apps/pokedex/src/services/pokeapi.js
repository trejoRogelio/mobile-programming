const BASE_URL = new URL('https://pokeapi.co/api/v2/');

export async function getPokemonByName(name) {
    const URI = new URL(`pokemon/${name}`, BASE_URL);

    const resp = await fetch(URI.href);

    if (!resp.ok)
        return Promise.reject(resp.json());

    return resp.json();
}

export async function getPokemonById(id) {
    const URI = new URL(`pokemon/${id}`, BASE_URL);

    const resp = await fetch(URI.href);

    if (!resp.ok) {
        return Promise.reject(resp.json());
    }

    const pokemonData = await resp.json();

    const types = pokemonData.types.map((type) => type.type.name);

    const stats = pokemonData.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
    }));

    const pokemonWithDetails = {
        ...pokemonData,
        types,
        stats,
    };

    return pokemonWithDetails;
}



