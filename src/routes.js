import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

const routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default routes;
