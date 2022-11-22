import { StatusBar } from 'expo-status-bar';
import { Modal, Platform } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { Container, OkButton } from './styles';

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({
  visible,
  onOk,
}: OrderConfirmedModalProps) {
  return (
    <Modal visible={visible} animationType='slide'>
      <StatusBar style={Platform.OS === 'ios' ? 'inverted' : 'dark'} />
      <Container>
        <CheckCircle />

        <Text
          size={20}
          weight='600'
          color='#fff'
          style={{ marginTop: 12, marginBottom: 4 }}
        >
          Pedido Confirmado
        </Text>
        <Text color='#fff'>O pedido ja entrou na fila de produção!</Text>

        <OkButton onPress={onOk}>
          <Text color='#d73035' weight='600'>
            OK
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
