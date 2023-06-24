import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const ReportScreen = () => {
  const debits = 5000; // Valor dos débitos
  const credits = 7000; // Valor dos créditos
  const balance = credits - debits; // Saldo

  const RelatorioScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Relatório</Text>
      <Button title="Sair" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
};

  const handleLogout = () => {
    // Lógica para lidar com a ação de sair
    console.log('Usuário fez logout');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Relatório de Conta</Text>
      <View style={styles.reportContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Débitos</Text>
          <Text style={styles.amount}>{debits.toFixed(2)}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Créditos</Text>
          <Text style={styles.amount}>{credits.toFixed(2)}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Saldo</Text>
          <Text style={styles.amount}>{balance.toFixed(2)}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reportContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReportScreen;