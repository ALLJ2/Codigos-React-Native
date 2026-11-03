import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.conteudo}>
      <Text>Contagem</Text>
      <Text style={styles.contador}>{contador}</Text>

      <View style={styles.espacoBotao}>
        <Button
          title="Incrementar"
          onPress={() => setContador(contador + 1)}
        />
      </View>

      <View style={styles.espacoBotao}>
        <Button
          title="Decrementar"
          onPress={() => setContador(contador - 1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contador: {
    fontSize: 32,
    marginBottom: 20, 
  },
  espacoBotao: {
    marginVertical: 10, 
    width: 200, 
  },
});

export default Contador;