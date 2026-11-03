import { collection, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { db } from "../config/config";
import Itens from "./Itens";
 
 
class ListarItens extends React.Component {
    state = {
        itens: [],
        carregando: true,
    };
 
    componentDidMount() {
        const itensRef = collection(db, 'itens');
 
        this.unsubscribe = onSnapshot(
            itensRef,
            (snapshot) => {
                const itens = snapshot.docs.map((documento) => ({
                    id: documento.id,
                    ...documento.data(),
                }));
 
                this.setState({
                    itens,
                    carregando: false,
                });
            },
            (error) => {
                console.error('Erro ao carregar itens:', error);
                this.setState({ carregando: false });
            }
        );
    }
 
    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
 
    render() {
        return (
            <View style={estilos.container}>
                {this.state.itens.length > 0
                    ? <Itens itens={this.state.itens} />
                    : <Text>Não há itens salvos</Text>
                }
            </View>
        )
    }
}
 
export default ListarItens
 
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItens: 'center'
    }
})