import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';
const heightAndroid = StatusBar.currentHeight;

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? `${heightAndroid}px` : '0'};
  background: #fafafa;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 24px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background-color: #fff;
  padding: 16px ${isAndroid ? '14px' : '24px'};
`;

export const FooterContent = styled.SafeAreaView`
`;
