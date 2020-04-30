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
  Separator,
} from './styles';

class Cart extends Component {
  renderProduct = (product) => {
    // const { cart } = this.props;
    console.tron.log(product);
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

const mapStateToProps = (state) => ({ cart: state.cart });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Cart);
