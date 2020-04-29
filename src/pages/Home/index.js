import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from '../../services/api';
import { formatPriceBRL } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductList,
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddCartButton,
  AddCartText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const response = await api.get('products');

      const data = response.data.map((product) => ({
        ...product,
        priceBRL: formatPriceBRL(product.price),
      }));

      this.setState({ products: data });
    } catch (error) {
      console.tron.error(error.response.data);
    }
  };

  handleAddProduct = (product) => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  renderProduct = ({ item }) => (
    <ProductContainer>
      <ProductImage source={{ uri: item.image }} />
      <ProductTitle>{item.title}</ProductTitle>
      <ProductPrice>{item.priceBRL}</ProductPrice>
      <AddCartButton onPress={() => this.handleAddProduct(item)}>
        <AddCartText>ADICIONAR AO CARRINHO</AddCartText>
      </AddCartButton>
    </ProductContainer>
  );

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ProductList
          data={products}
          keyExtractor={(product) => String(product.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
