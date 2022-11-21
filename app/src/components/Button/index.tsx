import { TouchableOpacityProps } from 'react-native';
import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
}

export function Button({ children, onPress, disabled }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight='600' color='#fff'>
        {children}
      </Text>
    </Container>
  );
}
