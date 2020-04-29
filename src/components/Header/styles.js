import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  background: ${colors.dark};
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  height: 70px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const LogoContainer = styled.TouchableOpacity`
  flex: 1;
`;

export const TextTeste = styled.Text`
  color: #fff;
`;
