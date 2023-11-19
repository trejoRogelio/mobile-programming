
import { Text, View, StyleSheet} from 'react-native';
export const Abilities = ({abilitiesList}) => {
    const showAbilities = () => {
        const abilities = abilitiesList.map((a, key)=> {
            return (
                <View key={key}>
                    <Text key={`ability-${key}`} style={styles.normalText}>{a.ability.name} </Text>
                </View>
            );
        });
        return abilities;
    };
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.secondaryText}>Abilities</Text>
            </View>
            <View>
                {showAbilities()}
            </View>
        </View>
        
    );
};
const styles = StyleSheet.create({
    mainText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:20
    },
    secondaryText: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    smallText: {
        fontSize: 10,
    },
    normalText: {
        textAlign: 'center',
    },
    container: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 20,
        backgroundColor: '#F1F7ED',
        borderRadius: 15,
        shadowColor: '#52006A',
        elevation: 10
    }
});
