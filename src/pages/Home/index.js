import React, { Component } from 'react';

import api from '../../services/api';
import { formatPriceBRL } from '../../util/format';

import {
  Container,
  ProductList,
  ProductContainer,
  ProductImage,
  ProductDescription,
  ProductPrice,
  AddCartContainer,
} from './styles';

export default class Home extends Component {
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

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ProductList
          data={products}
          keyExtractor={(product) => String(product.id)}
          renderItem={({ item }) => (
            <ProductContainer>
              <ProductImage />
              <ProductDescription />
              <ProductPrice />
              <AddCartContainer />
            </ProductContainer>
          )}
        />
      </Container>
    );
  }
}
