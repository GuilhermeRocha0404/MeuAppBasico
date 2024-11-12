import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App Básico com Expo</Text>
      <Text style={styles.contador}>Contador: {contador}</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Incrementar"
          onPress={() => setContador(contador + 1)}
        />
        <View style={styles.space} />
        <Button
          title="Decrementar"
          onPress={() => setContador(contador - 1)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  contador: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  space: {
    width: 10, // espaçamento entre os botões
  },
});