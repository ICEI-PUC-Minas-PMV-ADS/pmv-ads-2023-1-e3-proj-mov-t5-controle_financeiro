import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function OrcamentoScreen() {
  const [categoria, setCategoria] = useState('');
  const [renda, setRenda] = useState('');

  const handleLancar = () => {
    // Lógica para salvar o lançamento
    console.log('Lançamento salvo:', categoria, renda);
    setCategoria('');
    setRenda('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orçamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={categoria}
        onChangeText={text => setCategoria(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Renda"
        value={renda}
        onChangeText={text => setRenda(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLancar}>
        <Text style={styles.buttonText}>Lançar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 110,
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});