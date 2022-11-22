import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  loading?: boolean;
}

export function Button({ children, onPress, disabled, loading }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator size={15} color='#fff' style={{ height: 20 }} />
      ) : (
        <Text weight='600' color='#fff'>
          {children}
        </Text>
      )}
    </Container>
  );
}
