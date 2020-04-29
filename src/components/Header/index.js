import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import Logo from '../Logo';

import {
  Container,
  Wrapper,
  BasketContainer,
  LogoContainer,
  ItemCount,
} from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <LogoContainer onPress={() => navigation.navigate('Home')}>
          <Logo width={185} height={24} />
        </LogoContainer>

        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={20} color="#fff" />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
  // navigation: PropTypes
};
