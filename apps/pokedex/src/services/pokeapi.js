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

export async function getAllPokemonList() {
    const allPokemonList = {};

    try {
        let nextUrl = `${BASE_URL}pokemon?limit=20`;
        while (nextUrl) {
            const response = await fetch(nextUrl);
            if (!response.ok) {
                return Promise.reject(response.json());
            }

            const data = await response.json();
            const results = data.results;

            const pokemonPromises = results.map(async (result) => {
                const pokemonData = await getPokemonByName(result.name);
                return pokemonData;
            });

            const pokemonList = await Promise.all(pokemonPromises);
            pokemonList.forEach((pokemon) => {
                const types = pokemon.types.map((type) => type.type.name);
                types.forEach((type) => {
                    if (!allPokemonList[type]) {
                        allPokemonList[type] = [];
                    }
                    allPokemonList[type].push(pokemon);
                });
            });

            nextUrl = data.next;
        }

        const first40Pokemon = Object.values(allPokemonList).flat().slice(0, 40);

        return first40Pokemon;
    } catch (error) {
        console.error('Error fetching Pokémon list', error);
        return Promise.reject(error);
    }
}
export async function getPokemonListByType(type) {
    try {
        let nextUrl = `${BASE_URL}type/`;
        
        const typeResponse = await fetch(nextUrl);
        if (!typeResponse.ok) {
            throw new Error('Failed to fetch Pokémon types');
        }

        const typeData = await typeResponse.json();
        const targetType = typeData.results.find((t) => t.name === type);

        if (!targetType) {
            throw new Error('Type not found');
        }

        const typeId = targetType.url.split('/').reverse()[1];

        

        const response = await fetch(`${nextUrl}${typeId}`);

        if (!response.ok) {
            throw new Error('Failed to fetch Pokémon by type');
        }

        const data = await response.json();
        const pokemons = data.pokemon.map((entry) => entry.pokemon);

        const first40PokemonsWithImages = await Promise.all(
            pokemons.slice(0, 40).map(async (pokemon) => {
                const pokemonDetailsResponse = await fetch(pokemon.url);
                if (!pokemonDetailsResponse.ok) {
                    throw new Error('Failed to fetch Pokémon details');
                }
                const pokemonDetails = await pokemonDetailsResponse.json();
                return {
                    name: pokemonDetails.name,
                    sprites: {
                        front_default: pokemonDetails.sprites.front_default,
                    },
                };
            })
        );

        return first40PokemonsWithImages;
    } catch (error) {
        console.error('Error fetching Pokémon list by type', error);
        return Promise.reject(error);
    }
}
