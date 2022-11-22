import { useState } from 'react';
import {
  Keyboard,
  Modal,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Form, ModalBody, Overlay, Header, Input } from './styles';

interface TableModalProps {
  visible: boolean;
  onSave: (table: string) => void;
  onClose: () => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function handleSave() {
    onSave(table);
    setTable('');
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType='fade'>
      <TouchableWithoutFeedback
        onPress={() =>
          Keyboard._currentlyShowing === null ? onClose() : Keyboard.dismiss()
        }
      >
        <Overlay behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ModalBody>
            <Header>
              <Text weight='600'>Informe a mesa</Text>

              <TouchableOpacity onPress={onClose}>
                <Close color='#666' />
              </TouchableOpacity>
            </Header>
            <Form>
              <Input
                placeholder='Número da mesa'
                placeholderTextColor='#666'
                keyboardType='number-pad'
                onChangeText={setTable}
              />

              <Button onPress={handleSave} disabled={table.length === 0}>
                Salvar
              </Button>
            </Form>
          </ModalBody>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
