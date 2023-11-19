import { View, Text, StyleSheet } from 'react-native'
import { Link, useParams } from 'react-router-native';
import { useState, useEffect } from 'react'

import HButton from '../components/HButton'

import { getTypeById } from '../services/pokeapi'

const Type = () => {
    const [type, setType] = useState();

    const { typeid } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const typeInformation = await getTypeById(typeid);
                setType(typeInformation);
            } catch (error) {
                console.error(error);
            } finally {
                console.log('end!!!');
            }
        })();

    }, [typeid]);

  return (
    <View style={styles.main}>
        { type && (
            <View>
            <Text> Type {`${type.name}`}</Text>
            <View style={styles.typeColumns}>
                <View style={styles.typeColumn}>
                
                {type.damage_relations.no_damage_to && type.damage_relations.no_damage_to.length > 0 && (
                  <View>
                    <Text style={{fontWeight: "bold", borderBottomWidth:1}}>No Damage To</Text>
                    {type.damage_relations.no_damage_to.map((damageType) => (
                        <Link key={`NDT_${damageType.name}`} to={`/type/${damageType.name}`}>
                            <Text style={styles.type}>{damageType.name}</Text>
                        </Link>
                    ))}
                  </View>  
                )}
                {type.damage_relations.half_damage_to && type.damage_relations.half_damage_to.length > 0 && (
                  <View>
                    <Text style={{fontWeight: "bold", borderBottomWidth:1}}>Half Damage To</Text>
                    {type.damage_relations.half_damage_to.map((damageType) => (
                        <Link key={`HDT_${damageType.name}`} to={`/type/${damageType.name}`}>
                            <Text style={styles.type}>{damageType.name}</Text>
                        </Link>
                    ))}
                  </View>  
                )}
                {type.damage_relations.double_damage_to && type.damage_relations.double_damage_to.length > 0 && (
                  <View>
                    <Text style={{fontWeight: "bold", borderBottomWidth:1}}>Double Damage To</Text>
                    {type.damage_relations.double_damage_to.map((damageType) => (
                        <Link key={`DDT_${damageType.name}`} to={`/type/${damageType.name}`}>
                            <Text style={styles.type}>{damageType.name}</Text>
                        </Link>
                    ))}
                  </View>  
                )}
                </View>
                <View style={styles.typeColumn}>
                {type.damage_relations.no_damage_from && type.damage_relations.no_damage_from.length > 0 && (
                  <View>
                    <Text style={{fontWeight: "bold", borderBottomWidth:1}}>No Damage From</Text>
                    {type.damage_relations.no_damage_from.map((damageType) => (
                        <Link key={`NDF_${damageType.name}`} to={`/type/${damageType.name}`}>
                            <Text style={styles.type}>{damageType.name}</Text>
                        </Link>
                    ))}
                  </View>  
                )}
                {type.damage_relations.half_damage_from && type.damage_relations.half_damage_from.length > 0 && (
                  <View>
                    <Text style={{fontWeight: "bold", borderBottomWidth:1}}>Half Damage From</Text>
                    {type.damage_relations.half_damage_from.map((damageType) => (
                        <Link key={`HDF_${damageType.name}`} to={`/type/${damageType.name}`}>
                            <Text style={styles.type}>{damageType.name}</Text>
                        </Link>
                    ))}
                  </View>  
                )}
                {type.damage_relations.double_damage_from && type.damage_relations.double_damage_from.length > 0 && (
                  <View>
                    <Text style={{fontWeight: "bold", borderBottomWidth:1}}>Double Damage From</Text>
                    {type.damage_relations.double_damage_from.map((damageType) => (
                        <Link key={`DDF_${damageType.name}`} to={`/type/${damageType.name}`}>
                            <Text style={styles.type}>{damageType.name}</Text>
                        </Link>
                    ))}
                  </View>  
                )}
                </View>
            </View>
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

export default Type