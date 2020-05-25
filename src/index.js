import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';

import store from './store';

import Routes from './routes';
import NavigationService from './services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <NavigationContainer
        ref={(navigatorRef) => NavigationService.setNavigator(navigatorRef)}
      >
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
