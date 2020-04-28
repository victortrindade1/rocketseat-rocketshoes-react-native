import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

import colors from './styles/colors';

const Stack = createStackNavigator();

const routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation} />,
          cardStyle: { backgroundColor: colors.dark },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default routes;
