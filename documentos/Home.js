import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Calculadora from './Calculadora';
import Gastos from './Gastos';


const Home = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'calculadora', title: 'calculadora', icon: 'calculator' },
    { key: 'Gastos', title: 'Gastos', icon: 'finance' },
   
  ]);

  const renderScene = BottomNavigation.SceneMap({
    calculadora: Calculadora,
    
  });

  return (
    <BottomNavigation
