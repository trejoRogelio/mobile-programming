const BASE_URL = new URL('https://pokeapi.co/api/v2/');

export async function getPokemonByName(name) {
    const URI = new URL(`pokemon/${name}`, BASE_URL);

    const resp = await fetch(URI.href);

    // Si existe un error! en algún punto de la petición
    if (!resp.ok)
        return Promise.reject(resp.json());

    return resp.json();
}

export async function getPokemonById(id) {
    const URI = new URL(`pokemon/${id}`, BASE_URL);

    const resp = await fetch(URI.href);
    console.log(resp);
    // Si existe un error! en algún punto de la petición
    if (!resp.ok)
        return Promise.reject(resp.json());

    return resp.json();
}

export async function getPokemonList() {
    const URI = new URL('pokemon/', BASE_URL);
    const resp = await fetch(URI.href);
    console.log('res',resp);
    // Si existe un error! en algún punto de la petición
    if (!resp.ok)
        return Promise.reject(resp.json());
    const response = await resp.json();
    return response;
}