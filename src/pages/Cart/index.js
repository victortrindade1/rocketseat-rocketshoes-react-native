import React, { Component } from 'react';
import { Text } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPriceBRL } from '../../util/format';

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
  Separator,
  TotalContainer,
  TotalLabel,
  TotalNumber,
  SubmitButton,
  SubmitText,
  EmptyCartContainer,
  EmptyMsg,
} from './styles';

class Cart extends Component {
  handleRemoveFromCart = (id) => {
    const { removeFromCart } = this.props;

    removeFromCart(id);
  };

  handleAmountDown = (product) => {
    const { updateAmountRequest } = this.props;

    updateAmountRequest(product.id, product.amount - 1);
  };

  handleAmountUp = (product) => {
    const { updateAmountRequest } = this.props;

    updateAmountRequest(product.id, product.amount + 1);
  };

  renderProduct = (product) => {
    return (
      <Product>
        <ProductContainer>
          <ProductImage
            source={{
              uri: product.image,
            }}
          />
          <DescriptionContainer>
            <Description>{product.title}</Description>
            <DescriptionPrice>{product.priceBRL}</DescriptionPrice>
          </DescriptionContainer>
          <ProductDeleteButton
            onPress={() => this.handleRemoveFromCart(product.id)}
          >
            <Icon name="delete-forever" color={colors.primary} size={25} />
          </ProductDeleteButton>
        </ProductContainer>
        <AmountContainer>
          <AmountInputContainer>
            <AmountButton onPress={() => this.handleAmountDown(product)}>
              <Icon
                name="remove-circle-outline"
                color={colors.primary}
                size={25}
              />
            </AmountButton>
            <AmountInput>{product.amount}</AmountInput>
            <AmountButton onPress={() => this.handleAmountUp(product)}>
              <Icon
                name="add-circle-outline"
                color={colors.primary}
                size={25}
              />
            </AmountButton>
          </AmountInputContainer>
          <AmountSubTotal>{product.subtotal}</AmountSubTotal>
        </AmountContainer>
      </Product>
    );
  };

  // renderEmptyCart = () => <EmptyCart />;

  render() {
    const { cart, total } = this.props;

    // console.tron.log(cart.length);
    return (
      <CartContainer>
        {cart.length ? (
          <>
            <ProductList
              data={cart}
              keyExtractor={(product) => String(product.id)}
              renderItem={({ item }) => this.renderProduct(item)}
              ItemSeparatorComponent={() => <Separator />}
            />
            <TotalContainer>
              <TotalLabel>TOTAL</TotalLabel>
              <TotalNumber>{total}</TotalNumber>
            </TotalContainer>
            <SubmitButton>
              <SubmitText>FINALIZAR PEDIDO</SubmitText>
            </SubmitButton>
          </>
        ) : (
          <EmptyCartContainer>
            <Icon name="remove-shopping-cart" color="#ccc" size={80} />
            <EmptyMsg>Seu carrinho está vazio</EmptyMsg>
          </EmptyCartContainer>
        )}
      </CartContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPriceBRL(product.price * product.amount),
  })),
  total: formatPriceBRL(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0 // valor inicial
    )
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
