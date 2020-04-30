import React, { Component } from 'react';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';

import {
  CartContainer,
  ProductList,
  Product,
  ProductContainer,
  ProductImage,
  DescriptionContainer,
  Description,
  DescriptionPrice,
  ProductDeleteButton,
  AmountContainer,
  AmountButton,
  AmountInputContainer,
  AmountInput,
  AmountSubTotal,
} from './styles';

class Cart extends Component {
  // AINDA NÃO SEI SE INTERFERE ABRIR UM STATE
  // SÓ FIZ ISSO PQ O ESLINT TAVA RECLAMANDO
  state = {};

  render() {
    return (
      <CartContainer>
        <ProductList>
          <Product>
            <ProductContainer>
              <ProductImage
                source={{
                  uri:
                    'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                }}
              />
              <DescriptionContainer>
                <Description>Tênis de Caminhada Leve Confortável</Description>
                <DescriptionPrice>R$ 179,90</DescriptionPrice>
              </DescriptionContainer>
              <ProductDeleteButton>
                <Icon name="delete-forever" color={colors.primary} size={25} />
              </ProductDeleteButton>
            </ProductContainer>
            <AmountContainer>
              <AmountInputContainer>
                <AmountButton>
                  <Icon
                    name="remove-circle-outline"
                    color={colors.primary}
                    size={25}
                  />
                </AmountButton>
                <AmountInput>1</AmountInput>
                <AmountButton>
                  <Icon
                    name="add-circle-outline"
                    color={colors.primary}
                    size={25}
                  />
                </AmountButton>
              </AmountInputContainer>
              <AmountSubTotal>R$179,00</AmountSubTotal>
            </AmountContainer>
          </Product>
        </ProductList>
        {/* <TotalContainer />
        <SubmitButton /> */}
      </CartContainer>
    );
  }
}

const mapStateToProps = (state) => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Cart);
