import { Text, View, StyleSheet } from 'react-native';

function HeadInfo(props) {
    return (
        <View>
            <Text style={estilos.id_name}>{"No." + props.id}</Text>
            <Text style={estilos.id_name}>{props.name}</Text>
        </View>
    );


}

const estilos = StyleSheet.create({
    id_name: {
        textAlign: 'right',
        color: 'white',
        fontSize: 25,
        paddingTop: 9,
        paddingRight: 15,
        fontWeight: 'bold'
    }
});

export default HeadInfo;