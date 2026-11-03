import PropTypes from 'prop-types';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
 
 
class Itens extends React.Component {
    static propTypes = {
        itens: PropTypes.array.isRequired
    };
 
    render() {
        return (
            <View style={estilos.listarItens}>
                {this.props.itens.map(({ item }, index) => {
                    return (
                        <View key={index}>
                            <Text style={estilos.textItens}>
                                {item}
                            </Text>
                        </View>
                    );
                })};
            </View>
        )
    }
}
 
export default Itens;
 
const estilos = StyleSheet.create({
    listarItens: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
 
    textItens: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})