import React from 'react';
// import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '../Logo';

import { Container, Wrapper, BasketContainer, LogoContainer } from './styles';

export default function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <LogoContainer onPress={() => navigation.navigate('Home')}>
          <Logo width={185} height={24} />
        </LogoContainer>

        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={20} color="#fff" />
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
