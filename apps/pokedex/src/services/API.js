const BASE_URL = new URL('https://pokeapi.co/api/v2/');

const ERROR_MESSAGE = 'Error al obtener el pokémon';

export async function getPokemonByName(name) {
    const URI = new URL(`pokemon/${name}`, BASE_URL);

    const resp = await fetch(URI.href);
    console.log(resp)

    if (!resp.ok) {
        throw new Error(ERROR_MESSAGE);
    }

    return await resp.json();
}

export async function getPokemonById(id) {
    const URI = new URL(`pokemon/${id}`, BASE_URL);

    const resp = await fetch(URI.href);

    if (!resp.ok) {
        throw new Error(ERROR_MESSAGE);
    }

    return await resp.json();
}
