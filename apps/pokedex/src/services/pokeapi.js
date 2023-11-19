const BASE_URL = new URL('https://pokeapi.co/api/v2/');

export async function getPokemonByName(name) {
    const URI = new URL(`pokemon/${name}`, BASE_URL);

    try {
        const resp = await fetch(URI.href);
        // Si existe un error! en algun punto de la petición
        if (!resp.ok) {
            throw new Error('api error');
        }
        return resp.json();
    } catch (error) {
        throw new Error('error');
    }
}

export async function getPokemonById(id) {
    const URI = new URL(`pokemon/${id}`, BASE_URL);
    try {
        const resp = await fetch(URI.href);

        // Si existe un error! en algun punto de la petición
        if (!resp.ok) {
            throw new Error('api error');
        }

        return resp.json();
    } catch (error) {
        throw new Error('error');
    }
    
}

export async function getPokemonList(limit,offset) {
    const URI = new URL('pokemon',BASE_URL);
    URI.searchParams.append('limit', limit);
    URI.searchParams.append('limit', offset);
    let resp;
    try {
        resp = await fetch(URI.href);
        if(!resp.ok) {
            throw new Error('api error');
        }
        return resp.json();
    } catch (error) {
        throw new Error('api error');
    } 
}