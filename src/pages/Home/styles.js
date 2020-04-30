import styled from 'styled-components/native';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View``;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  margin-top: 20px;
`;

export const ProductContainer = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 15px;
  width: 220px;
  /* flex-direction: row; */
  /* align-items: center; */
  /* flex: 1; */
  /* height: 80px; */
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
  /* border-radius: 21px; */
  /* background: #eee; */
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  /* font-weight: bold; */
  /* color: #333; */
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  /* color: #666; */
  /* margin-top: 2px; */
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddCartButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: ${colors.primary};
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddCartText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
