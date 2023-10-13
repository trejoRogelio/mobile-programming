const BASE_URL = new URL('https://pokeapi.co/api/v2/');

export async function getPokemonByName(name) {
    const URI = new URL(`pokemon/${name.toLowerCase()}`, BASE_URL);

    try {
        const resp = await fetch(URI.href);

        if (!resp.ok) {
            // Si la respuesta no es exitosa, maneja el error aquí
            const errorText = await resp.text();
            return Promise.reject(errorText);
        }

        const data = await resp.json();
        return data;
    } catch (error) {
        // Maneja otros errores que puedan ocurrir, como problemas de red
        return Promise.reject(error);
    }
}


export async function getPokemonById(id) {
    const URI = new URL(`pokemon/${id}`, BASE_URL);

    const resp = await fetch(URI.href);

    // Si existe un error! en algun punto de la petición
    if (!resp.ok)
        return Promise.reject(resp.json());

    return resp.json();
}

export async function getTypeById(id) {
    const URI = new URL(`type/${id}`, BASE_URL);

    const resp = await fetch(URI.href);

    // Si existe un error! en algun punto de la petición
    if (!resp.ok)
        return Promise.reject(resp.json());

    return resp.json();
}

export async function getAbilityById(id) {
    const URI = new URL(`ability/${id}`, BASE_URL);

    const resp = await fetch(URI.href);

    // Si existe un error! en algun punto de la petición
    if (!resp.ok)
        return Promise.reject(resp.json());

    return resp.json();
}