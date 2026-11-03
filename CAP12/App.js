import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Contador from './componentes/Contador';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Contador />
    </SafeAreaView>
  );
};

export default App;