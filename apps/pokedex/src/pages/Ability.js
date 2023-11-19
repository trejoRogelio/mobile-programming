import { View, Text, StyleSheet } from 'react-native'
import { Link, useParams } from 'react-router-native';
import { useState, useEffect } from 'react'

import HButton from '../components/HButton'

import { getAbilityById } from '../services/pokeapi'

const Ability = () => {
    const [ability, setAbility] = useState();

    const { abilityid } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const abilityidInformation = await getAbilityById(abilityid);
                setAbility(abilityidInformation);
            } catch (error) {
                console.error(error);
            } finally {
                console.log('end!!!');
            }
        })();

    }, []);

  return (
    <View style={styles.main}>
        { ability && (
            <View>
            <Text> Ability {`${ability.name}`}</Text>
            {ability.effect_entries[0] && (
                <Text>{`${ability.effect_entries[0].effect}`}</Text>
            )}
            </View>
        )}
        <HButton />
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        alignItems: 'left',
    },
    typeColumns: {
        padding: 10,
        flexDirection: 'row',
        alignItems: '',
        justifyContent: 'space-between'
    },
    typeColumn: {
        width: 180,
        borderWidth: 2
    },
    type: {
        borderBottomWidth: 1
    }
});

export default Ability