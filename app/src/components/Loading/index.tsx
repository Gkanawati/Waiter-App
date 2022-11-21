import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export function Loading() {
  return (
    <Container>
      <ActivityIndicator color='#333' size={33} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
