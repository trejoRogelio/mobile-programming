import React from 'react';
import { FlatList, View, Text, StyleSheet} from 'react-native';

export const Movements = ({pokemonMoves}) => {
    return (
        <View>
            <FlatList  
                scrollEnabled={false}
                data={pokemonMoves.slice(0,6)}
                ListHeaderComponent={
                    <View>
                        <Text style={styles.normalText}>
                            Moves
                        </Text>
                    </View>}
                renderItem={({item}) => (
                    <View>
                        <Text style={styles.smallText}>
                            {`${item.move.name}` }
                        </Text>
                    </View>
                )}/>
        </View>
        
    );
};
const styles = StyleSheet.create({
    results: {
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 40,
        backgroundColor: '#F1F7ED',
        borderRadius: 15,
        shadowColor: '#52006A',
        elevation: 10
    },
    mainText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:20
    },
    secondaryText: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
    },
    smallText: {
        fontSize: 12,
        paddingLeft: 6,
    },
    normalText: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 14,
    },
    description: {
        padding: 10,
        margin: 10,
    }
});
