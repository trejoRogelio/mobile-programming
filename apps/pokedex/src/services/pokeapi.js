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

    if (!resp.ok) {
        return Promise.reject(resp.json());
    }

    const pokemonData = await resp.json();

    const abilities = pokemonData.abilities.map(ability => ability.ability.name);
    const moves = pokemonData.moves.map(move => move.move.name);

    const hiddenAbilities = [];
    for (const ability of pokemonData.abilities) {
        if (ability.is_hidden) {
            hiddenAbilities.push(ability.ability.name);
        }
    }

    const forms = pokemonData.forms.map(form => form.name);

    return {
        id: pokemonData.id,
        name: pokemonData.name,
        height: pokemonData.height,
        weight: pokemonData.weight,
        base_experience: pokemonData.base_experience,
        types: pokemonData.types.map(type => type.type.name),
        abilities,
        moves,
        hiddenAbilities,
        forms
    };
}
