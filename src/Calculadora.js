import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

import Container from './../components/Container';
import Header from './../components/Header';
import Body from './../components/Body';
import Input from './../components/Input';

const Calculadora = () => {
  const [ali, setAli] = useState("");
  const [edu, setEdu] = useState("");
  const [tra, setTra] = useState("");
  const [laz, setLaz] = useState("");
  const [con, setCon] = useState("");
  const [sau, setSau] = useState("");
  const [nov, setNov] = useState("");
  const [res, setRes] = useState("");

 const handleCalcular = () => {
   
    

  }
    
 

return (

  <Container>
  <Header title = {'Controle Financeiro'} />
    <Body>

      <Input
          label="Alimentaçao"
          value={ali}
          onChangeText={(text) => setAli(text)}
        />
        < Input
          label="Educaçao"
          value={edu}
          onChangeText={(text) => setEdu(text)}
        />
        <Input
          label="Lazer"
          value={laz}
          onChangeText={(text) => setLaz(text)}
        />
           <Input
          label="Contas a Pagar"
          value={con}
          onChangeText={(text) => setCon(text)}
        />
        < Input
          label="Transporte"
          value={tra}
          onChangeText={(text) => setTra(text)}
        />
    
        <Input
        label="Saude"
        value={sau}
        onChangeText={text => setSau(text)}
        />
          <Input
          label="Acrescentar Item"
          value={nov}
          onChangeText={(text) => setNov(text)}
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

  input:{
    backgroundColor: '#FFF',
    marginBotton:4
  },
  text:{
    textAlign:'center',
    margin: 4
  }

});
export default Calculadora;
