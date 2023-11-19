import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'react-router-native';
import PokeList from '../components/PokeList';

const List = () => {
    return (
        <View style={styles.container}>
            <Link to='/'>
                <Text style={styles.linkText}>Go Back</Text>
            </Link>
            <PokeList style={styles.pokeList} />
        </View>
    );
};

const styles = StyleSheet.create({
    linkText: {
        color: '#fff',
        padding: 10,
        backgroundColor: '#000',
        marginTop: 20,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
    },
    pokeList: {
        flex: 1, 
        width: '100%', 
    },
});

export default List;
