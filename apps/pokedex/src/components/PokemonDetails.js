import React from "react";
import { View, Text } from "react-native";
import Aesthetic from "./Aesthetic";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function PokemonDetails({ pokemon, abilities, moves }) {
    return (
        <View style={Aesthetic.block}>
            <Text style={Aesthetic.stat}>
                <Text style={Aesthetic.nameStat}>Nombre:</Text> {pokemon?.name}
            </Text>

            {abilities.length > 0 && (
                <View >
                    <Text style={Aesthetic.nameStat}>Habilidades:</Text>
                    {abilities.map((ability, index) => (
                        <Text style={{ textTransform: 'capitalize',  fontSize: 20 }} key={index}>  • {ability.ability.name}</Text>
                    ))}
                </View>
            )}

            <Text style={Aesthetic.nameStat}>Movimientos:</Text>
            {moves.map((move, index) => (
                <Text style={Aesthetic.stat} key={index}>  • {move.move.name}</Text>
            ))}

            <Text>
            <Text style={Aesthetic.nameStat}>Tipo:</Text>
            {pokemon.types.map((type, index) => (
                <Text style={Aesthetic.stat} key={index}> {type.type.name}</Text>
            ))}
            </Text>

            {pokemon?.stats && (
            <>
                {pokemon.stats.map((stat, index) => (
                <Text style={Aesthetic.stat} key={index}>
                    <Text style={Aesthetic.nameStat}>{capitalizeFirstLetter(stat.stat.name)}:</Text> {stat.base_stat}
                </Text>
                ))}
            </>    
            )}
            
            <Text style={Aesthetic.stat}>
                <Text style={Aesthetic.nameStat}>Altura:</Text> {pokemon?.height}
            </Text>

            <Text style={Aesthetic.stat}>
                <Text style={Aesthetic.nameStat}>Peso:</Text> {pokemon?.weight}
            </Text>
        </View>
    );
}

export default PokemonDetails;
