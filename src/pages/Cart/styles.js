import styled from 'styled-components/native';

export const CartContainer = styled.View`
  background-color: #fff;
  border-radius: 4px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 10px;
`;

export const ProductList = styled.FlatList``;

export const Product = styled.View``;

export const ProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductImage = styled.Image`
  height: 75px;
  width: 75px;
`;

export const DescriptionContainer = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  width: 65%;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
`;

export const DescriptionPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductDeleteButton = styled.TouchableOpacity`
  width: 40px;
`;

export const AmountContainer = styled.View`
  /* height: 50px; */
  border-radius: 4px;
  background-color: #ddd;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  align-items: center;
`;

export const AmountButton = styled.TouchableOpacity``;

export const AmountInputContainer = styled.View`
  width: 40%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AmountInput = styled.TextInput.attrs({
  readonly: true,
})`
  background-color: #fff;
  border-radius: 4px;
  border: 1px #bbb solid;
  height: 36px;
  padding: 5px;
  flex: 1;
  /* margin-left: 5px; */
  /* margin-right: 5px; */
  margin: 0 5px;
  text-align: center;
`;

export const AmountSubTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #ddd;
  margin: 20px 0 20px 0;
`;
