const BASE_URL = new URL('https://pokeapi.co/api/v2/');

export async function getPokemonByName(name) {
    const URI = new URL(`pokemon/${name}`, BASE_URL);

    const resp = await fetch(URI.href);

    // Verificar si la solicitud se completó correctamente
    if (!resp.ok) {
        console.error('Error al buscar el Pokémon por nombre:', resp.status, resp.statusText);
        return Promise.reject('Error al buscar el Pokémon por nombre');
    }

    return resp.json();
}

export async function getPokemonById(id) {
    const URI = new URL(`pokemon/${id}`, BASE_URL);

    const resp = await fetch(URI.href);

    // Verificar si la solicitud se completó correctamente
    if (!resp.ok) {
        console.error('Error al buscar el Pokémon por ID:', resp.status, resp.statusText);
        return Promise.reject('Error al buscar el Pokémon por ID');
    }

    return resp.json();
}

export async function getPokemonList(limit) {
    const URI = new URL(`pokemon?limit=${limit}`, BASE_URL);

    const resp = await fetch(URI.href);

    // Verificar si la solicitud se completó correctamente
    if (!resp.ok) {
        console.error('Error al obtener la lista de Pokémon:', resp.status, resp.statusText);
        return Promise.reject('Error al obtener la lista de Pokémon');
    }

    const data = await resp.json();
    return data.results;
}
