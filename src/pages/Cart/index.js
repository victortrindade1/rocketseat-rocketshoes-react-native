import React, { Component } from 'react';

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
} from './styles';

class Cart extends Component {
  handleRemoveFromCart = (id) => {
    const { removeFromCart } = this.props;

    removeFromCart(id);
  };

  handleAmountDown = (product) => {
    const { updateAmount } = this.props;

    updateAmount(product.id, product.amount - 1);
  };

  handleAmountUp = (product) => {
    const { updateAmount } = this.props;

    updateAmount(product.id, product.amount + 1);
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

  render() {
    const { cart } = this.props;

    return (
      <CartContainer>
        <ProductList
          data={cart}
          keyExtractor={(product) => String(product.id)}
          renderItem={({ item }) => this.renderProduct(item)}
          ItemSeparatorComponent={() => <Separator />}
        />
        {/* <TotalContainer />
        <SubmitButton /> */}
      </CartContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPriceBRL(product.price * product.amount),
  })),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
