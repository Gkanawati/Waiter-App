import { FlatList, Modal } from 'react-native';
import { Product } from '../../@types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import {
  CloseButton,
  Footer,
  FooterContent,
  Header,
  Image,
  Ingredient,
  IngredientsContainer,
  ModalBody,
  PriceContainer,
} from './styles';

interface ProductModalProps {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ visible, product, onClose }: ProductModalProps) {
  if (!product) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://192.168.1.3:3333/uploads/${product.imagePath}`,
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight='600'>
            {product.name}
          </Text>
          <Text color='#666' style={{ marginTop: 8 }}>
            {product.description}
          </Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight='600' color='#666'>
              Ingredientes
            </Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={(item) => item._id}
              style={{ marginTop: 16 }}
              renderItem={({ item: ingredient }) => (
                <Ingredient key={ingredient.name}>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color='#666' style={{ marginLeft: 24 }}>
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
              showsVerticalScrollIndicator={false}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContent>
          <PriceContainer>
            <Text color='#666'>Preço</Text>
            <Text size={20} weight='600'>
              {formatCurrency(product.price)}
            </Text>
          </PriceContainer>

          <Button onPress={() => console.log('')}>Adicionar ao pedido</Button>
        </FooterContent>
      </Footer>
    </Modal>
  );
}
