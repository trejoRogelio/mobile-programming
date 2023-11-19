const BASE_URL = new URL('https://pokeapi.co/api/v2/');
import { Alert } from 'react-native';

export async function getPokemonByName(name) {

    const name_lower = name.toLowerCase();
    const URI = new URL(`pokemon/${name_lower}`, BASE_URL);

    const resp = await fetch(URI.href);

    // Si existe un error! en algun punto de la petición
    if (!resp.ok) {
        return Alert.alert('El pokémon no existe');
        //return Promise.reject(errorResponse);
    }

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

export async function getTwentyPokemon(id) {
    const URI = new URL(`pokemon/?offset=20&limit=20`, BASE_URL);

    const resp = await fetch(URI.href);

    // Si existe un error! en algun punto de la petición
    if (!resp.ok)
        return Promise.reject(resp.json());

    return resp.json();
}