import React from 'react';
import { FlatList, View, Text, StyleSheet} from 'react-native';

export const Stats = ({pokemonStats}) => {
    const processedStats = pokemonStats.map((stat)=> {
        // processedStats[stat.stat.name] = stat.base_stat;
        return {name: stat.stat.name, number: stat.base_stat};
    });

    return (
        <View>
            <FlatList  
                data={processedStats}
                scrollEnabled={false}
                ListHeaderComponent={
                    <View>
                        <Text style={styles.normalText}>
                            Stats
                        </Text>
                    </View>}
                renderItem={({item}) => (
                    <View>
                        <Text style={styles.smallText}>
                            {`${item.name}: ${item.number}` }
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
