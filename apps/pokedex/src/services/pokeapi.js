const BASE_URL = new URL('https://pokeapi.co/api/v2/');

export async function getPokemonByName(name) {
    const URI = new URL(`pokemon/${name}`, BASE_URL);

    const resp = await fetch(URI.href);

    // Si existe un error! en algun punto de la petición
    if (!resp.ok)
        return Promise.reject(resp.json());

    return resp.json();
}

export async function getPokemonById(id) {
    const URI = new URL(`pokemon/${id}`, BASE_URL);

    const resp = await fetch(URI.href);

    // Si existe un error! en algun punto de la petición
    if (!resp.ok)
        return Promise.reject(resp.json());

    return resp.json();
}