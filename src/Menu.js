import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Feather } from '@expo/vector-icons';


import ContaBancaria from './ContaBancaria';
import Despesas from './Despesas';
import Orcamento from './Orcamento';
import Relatorio from './Relatorio';

// Tela de Conta Bancária
const ContaBancariaScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Conta Bancária</Text>
  </View>
);

// Tela de Despesas
const DespesasScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Despesas</Text>
  </View>
);

// Tela de Orçamento
const OrcamentoScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Orçamento</Text>
  </View>
);

// Tela de Relatório
const RelatorioScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Relatório</Text>
  </View>
);

// Configuração das rotas
const AppNavigator = createStackNavigator(
  {
    Menu: {
      screen: ({ navigation }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Menu</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'green' }]}
            onPress={() => navigation.navigate('ContaBancaria')}
          >
            <Text style={styles.buttonText}>Conta Bancária</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'blue' }]}
            onPress={() => navigation.navigate('Despesas')}
          >
            <Text style={styles.buttonText}>Despesas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'orange' }]}
            onPress={() => navigation.navigate('Orcamento')}
          >
            <Text style={styles.buttonText}>Orçamento</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'purple' }]}
            onPress={() => navigation.navigate('Relatorio')}
          >
            <Text style={styles.buttonText}>Relatório</Text>
          </TouchableOpacity>
        </View>
      ),
    },
    ContaBancaria: { screen: ContaBancaria },
    Despesas: { screen: Despesas },
    Orcamento: { screen: Orcamento },
    Relatorio: { screen: Relatorio },
  },
  {
    initialRouteName: 'Menu',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
