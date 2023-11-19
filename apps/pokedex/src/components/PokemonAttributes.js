import React from 'react';
import { View, Text } from 'react-native';
import { informationStyles } from '../components/styles';
import { homeStyles } from '../components/styles';

const PokemonAttributes = ({ attributes }) => {
    return (
        <View style={homeStyles.main}>
            <Text style={informationStyles.text}>Id: {attributes.id}</Text>
            <Text style={informationStyles.text}>Name: {attributes.name}</Text>
            <Text style={informationStyles.text}>Height: {attributes.height}</Text>
            <Text style={informationStyles.text}>Weight: {attributes.weight}</Text>
            <Text style={informationStyles.text}>Types: {attributes.types.join(', ')}</Text>
            <Text style={informationStyles.text}>Abilities: {attributes.abilities.join(', ')}</Text>
            <Text style={informationStyles.text}>Moves: {attributes.moves.join(', ')}</Text>
            <Text style={informationStyles.text}>Hidden Abilities: {attributes.hiddenAbilities.join(', ')}</Text>
            <Text style={informationStyles.text}>Forms: {attributes.forms.join(', ')}</Text>
            <Text style={informationStyles.text}>Base Experience: {attributes.base_experience}</Text>
        </View>
    );
}

export default PokemonAttributes;
