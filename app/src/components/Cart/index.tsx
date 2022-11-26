import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../@types/CartItem';
import { Product } from '../../@types/Product';
import { api, baseURL } from '../../utils/api';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { OrderConfirmedModal } from '../ConfirmedModal';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import {
  Actions,
  Image,
  Item,
  ProductContainer,
  ProductDetails,
  QuantityContainer,
  Summary,
  TotalContainer,
} from './styles';

interface CartProps {
  cartItems: CartItem[];
  selectedTable: string;
  onAdd: (product: Product) => void;
  onConfirmOrder: () => void;
  onDecrement: (product: Product) => void;
}

export function Cart({
  cartItems,
  selectedTable,
  onAdd,
  onDecrement,
  onConfirmOrder,
}: CartProps) {
  const [visibleConfirmedModal, setVisibleConfirmedModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleOk() {
    setVisibleConfirmedModal(false);
    onConfirmOrder();
  }

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  async function handleConfirmOrder() {
    setIsLoading(true);
    const payload = {
      table: selectedTable,
      products: cartItems.map((cartItem) => ({
        product: cartItem.product._id,
        quantity: cartItem.quantity,
      })),
    };

    await api.post('/orders', payload);
    setVisibleConfirmedModal(true);
    setIsLoading(false);
  }

  return (
    <>
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={(cartItem) => cartItem.product._id}
          style={{ marginBottom: 20, maxHeight: 140 }}
          renderItem={({ item: cartItem }) => (
            <Item>
              <ProductContainer>
                <Image
                  source={{
                    uri: `${baseURL}/uploads/${cartItem.product.imagePath}`,
                  }}
                />

                <QuantityContainer>
                  <Text size={14} color='#666'>
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>

                <ProductDetails>
                  <Text size={14} weight='600'>
                    {cartItem.product.name}
                  </Text>
                  <Text size={14} color='#666' style={{ marginTop: 4 }}>
                    {formatCurrency(cartItem.product.price)}
                  </Text>
                </ProductDetails>
              </ProductContainer>
              <Actions>
                <TouchableOpacity
                  style={{ marginRight: 24 }}
                  onPress={() => onAdd(cartItem.product)}
                >
                  <PlusCircle />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDecrement(cartItem.product)}>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color='#666'>Total</Text>
              <Text size={20} weight='600'>
                {formatCurrency(total)}
              </Text>
            </>
          ) : (
            <Text color='#999'>Seu carrinho esta vazio</Text>
          )}
        </TotalContainer>

        <Button
          onPress={() => handleConfirmOrder()}
          disabled={cartItems.length === 0}
          loading={isLoading}
        >
          Confirmar Pedido
        </Button>
      </Summary>

      <OrderConfirmedModal visible={visibleConfirmedModal} onOk={handleOk} />
    </>
  );
}
