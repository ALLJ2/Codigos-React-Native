import { addDoc, collection } from 'firebase/firestore';
import React from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { db } from "../config/config";
 
class AdicionarItens extends React.Component {
    state = {
        item: ''
    };
 
    salvarItem = async () => {
 
        const itemDigitado = this.state.item.trim();
 
        if(!itemDigitado) {
            Alert.alert('Atenção', 'Digite alguma coisa antes de adicionar!');
            return;
        }
 
        try{
            await addDoc(collection(db, 'itens'), {
                item: itemDigitado,
                criadoEm: new Date(),
            });
 
            Alert.alert('Sucesso', 'Item incluído com sucesso!');
            this.setState({item: ''});
        } catch (error) {
            console.error('Falha ao salvar item:', error);
            Alert.alert('(;-;)', 'Não foi possível salvar o item');
        }
    };
 
 
    render() {
        return (
            <View style={estilos.conteudoPrincipal}>
                <Text style={estilos.titulo}>
                    Adicionar Item
                </Text>
                <TextInput
                style={estilos.itemInput}
                onChangeText={
                    item => {this.setState({item})}
                }
                />
                <TouchableHighlight
                style={estilos.btn}
                underlayColor="white"
                onPress={this.salvarItem}
                >
                    <Text style={estilos.textoBtn}>
                        Adicionar
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}
 
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
    },
   
    titulo: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
   
    itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'black',
        backgroundColor: 'white',
    },
   
    textoBtn: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
   
    btn: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: '#2196F3',
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
})
 
export default AdicionarItens