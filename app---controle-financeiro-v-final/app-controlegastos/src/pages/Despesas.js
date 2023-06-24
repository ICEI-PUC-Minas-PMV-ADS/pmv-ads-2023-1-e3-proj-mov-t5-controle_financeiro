import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InserirDespesasScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inserir Despesas</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Categoria:</Text>
        <TextInput style={styles.input} placeholder="Digite a categoria" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Custo:</Text>
        <TextInput style={styles.input} placeholder="Digite o custo" keyboardType="numeric" />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Lançar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InserirDespesasScreen;