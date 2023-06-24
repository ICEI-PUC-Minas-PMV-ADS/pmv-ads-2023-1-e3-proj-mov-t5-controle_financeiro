import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

import Container from '../components/container';
import Header from '../components/Header';
import Body from '../components/body';
import Input from './../components/Input';


const Calculadora = () => {
  const [ban, setBan] = useState('');
  const [des, setDes] = useState('');
  const [orc, setOrc] = useState('');
  const [rel, setRel] = useState('');

  const handleCalcular = () =>{

    if(!ban || ban <=0 || !des || des <=0|| !orc || orc <=0|| !rel || rel <=0){
      Alert.alert('Atenção!', 'Obrigatório informar o valor do Controle financeiro!');
    }
    
  }

  return (
    <Container>
      <Header title={'Calculadora'} />
      <Body>
        <Input
          label="Conta Bancaria"
          value={ban}
          onChangeText={(text) => setBan(text)}
        />
        <Input
          label="Despesas"
          value={des}
          onChangeText={(text) => setDes(text)}
        />
         <Input
          label="Orcamento"
          value={orc}
          onChangeText={(text) => setOrc(text)}
        />
        <Input
          label="Relatorio"
          value={rel}
          onChangeText={(text) => setRel(text)}
        />
        <Button mode="contained" onPress={handleCalcular}>
          Calcular
        </Button>
        <Text style={styles.text}> {res} </Text>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    margin: 8,
  },
});

export default Calculadora;