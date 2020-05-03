import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const CartContainer = styled.View`
  background: #fff;
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

export const TotalContainer = styled.View`
  align-items: center;
  padding: 40px 0 40px 0;
`;

export const TotalLabel = styled.Text`
  color: #777;
  font-weight: bold;
  font-size: 16px;
`;

export const TotalNumber = styled.Text`
  font-size: 34px;
  font-weight: bold;
`;

export const SubmitButton = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: 4px;
  /* width: 100%; */
  align-items: center;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 16px;
  padding: 15px 0 15px 0;
  font-weight: bold;
`;

export const EmptyCartContainer = styled.View`
  align-items: center;
`;

export const EmptyMsg = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding: 20px 0 0 0;
`;
