import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Menu';
import Abastecimento from '../pages/ContaBancaria';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Pages">
      <Stack.Screen
        name="Pages"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Abastecimento"
        component={Abastecimento}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;